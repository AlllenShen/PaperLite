from . import user

@user.route('/login', methods=['POST'])
def login():
    """
    用户登录 返回用户基本信息

    使用动态加密
    :return:
    """
    pass