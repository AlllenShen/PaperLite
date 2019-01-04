import requests
import datetime
import json
import os
os.chdir('..')
from sqlalchemy.exc import InvalidRequestError

from models import Session, Student, Academy, Activity, Organization, Teacher


class SecondaryLessonSpider:
    def __init__(self, user_email, user_pw, sno):
        self.user_email = user_email
        self.user_pw = user_pw
        self.sno = sno
        self.login_url = 'https://dev.wxhfut.com/api/student/login'
        self.base_url = 'https://dev.wxhfut.com'
        self.headers = {
            'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
            # 'content-type': 'application/json;charset=UTF-8',
            # 'referer': 'https: //dev.wxhfut.com/student/'
        }
        params = {
            'password': self.user_pw,
            'username': self.user_email
        }
        r = requests.post(self.login_url, headers=self.headers, json=params)
        if r.status_code != 200 :
            raise ValueError('login request responses {}. Check values'.format(r.status_code))
        self.headers['authorization'] = 'Bearer ' + r.json()['data']
        self.session = Session()
        self.log = open('error.log', 'a', encoding='utf-8')

    def __del__(self):
        self.log.close()

    def exist_check_by_id(self, target, id, name=None, update=True, **kwargs):
        new = self.session.query(target).filter_by(id=id).first()
        if new is None and update:
            new = target(
                id=id,
                name=name
            )
            for i in kwargs:
                if i in new.__dir__():
                    new.__setattr__(i, kwargs[i])
            self.session.add(new)
            self.session.commit()
            return False
        return True

    def update_stu_info(self):
        r = requests.get('https://dev.wxhfut.com/api/student/me', headers=self.headers)
        info = r.json()['data']
        # 查询stu是否入库
        stu = self.session.query(Student).filter_by(id=info['id']).first()
        if stu is None:
            stu = Student(sno=self.sno)
            self.session.add(stu)
            self.session.commit()
            self.exist_check_by_id(Academy, info['academy'], info['academy_name'])
        # 字段更新
        stu.name = info['name']
        stu.academy_id = info['academy']
        stu.email = info['email']
        stu.id = info['id']
        stu.major = info['major']
        stu.phone = info['phone']
        # stu.sno = info['sno']
        stu.cls = info['the_class']
        stu.gender = info['gender']
        self.session.commit()

    def update_activities(self):
        # TODO：
        # - 异常处理 错误内容需要重新爬
        url = 'https://dev.wxhfut.com/api/student/post'
        for type in range(1, 4):
            page = 1
            page_size = 10
            while True:
                params = {
                    'type': type,
                    'page': page,
                    'page_size': page_size,
                }
                r = requests.get(url, headers=self.headers, params=params)
                print('type: {}, page: {}'.format(type, page))
                if r.status_code != 200:
                    break
                info = r.json()['data']
                for item in info:
                    act = self.session.query(Activity).filter_by(id=item['id']).first()
                    if act is None:
                        act = Activity(id=item['id'])
                        self.session.add(act)
                        self.session.commit()
                        self.exist_check_by_id(Organization, item['organization']['id'], item['organization']['name'])
                    # 更新数据
                    f = '%Y-%m-%d %H:%M:%S'
                    # 有的时间格式有错
                    try:
                        act.apply_begin_at = datetime.datetime.strptime(item['apply_begin_at'], f)
                        act.apply_end_at = datetime.datetime.strptime(item['apply_end_at'], f)
                        act.created_at = datetime.datetime.strptime(item['created_at'], f)
                        act.capacity = item['capacity']
                        act.organization_id = item['organization']['id']
                        act.title = item['title']
                        act.type_id = type
                        act.total_member = item['total_member']
                        act.avatar = self.base_url + item['organization'].get('avatar', '')
                        self.session.commit()
                    except Exception as e:
                        self.session.rollback()
                        self.log.write('type: {}, page: {}, page_size: {}, index: {}: {}\n'.format(type, page, page_size, info.index(item), str(e)))
                    print('update: {} < {}'.format(item['title'], item['organization']['name']))
                page += 1

    def handle_detail(self, id):
        url = 'https://dev.wxhfut.com/api/student/post/'
        r = requests.get(url + id, headers=self.headers)
        if r.status_code != 200:
            self.log.write('id: {} code: {}'.format(id, r.status_code))
            return
        info = r.json()['data']
        teacher_info = info['adviser']
        # 更新教师信息
        self.exist_check_by_id(Teacher, teacher_info.get('id'), teacher_info.get('name'),
                               phone= teacher_info.get('phone'),
                               work_no= teacher_info.get('work_no'),
                               department= teacher_info.get('department'),
                               )
        # 更新活动详情
        act = self.session.query(Activity).filter_by(id=id).first()
        if act is None:
            act = Activity(id=info.get('id'))
            self.session.add(act)
            self.session.commit()

        f = '%Y-%m-%d %H:%M:%S'
        act.apply_begin_at = datetime.datetime.strptime(info['apply_begin_at'], f)
        act.apply_end_at = datetime.datetime.strptime(info['apply_end_at'], f)
        act.created_at = datetime.datetime.strptime(info['created_at'], f)
        act.title = info['title']
        act.type_id = info.get('type', 1)
        act.total_member = info['total_member']

        act.accepted_apply = info.get('accepted_apply')
        act.category = info.get('category')
        act.content = info.get('content')
        act.organization_id = info.get('organization')
        act.principal = info.get('principal')
        act.contact = info.get('contact')
        act.status = info.get('status')
        act.level = info.get('level')
        self.session.commit()
        print('detail update {}'.format(act.title))

    def test(self):
        url = 'https://dev.wxhfut.com/api/student/post/'
        id = '5c03683bd541857d8166aefa'
        r = requests.get(url + id, headers=self.headers)
        print(json.dumps(r.json(), indent=4, ensure_ascii=False))
        # print(r.status_code)
        # print(len(r.json()['data']))
        with open('test.json', 'w', encoding='utf-8') as f:
            json.dump(r.json(), f,indent=4, ensure_ascii=False)