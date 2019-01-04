from . import act

######################
#     activity
######################

@act.route('/search', methods=['POST'])
def search():
    """
    搜索活动
    :return:
    """
    pass

@act.route('/sign-up', methods=['POST'])
def search():
    """
    报名
    :return:
    """
    pass

######################
#     idea
######################

@act.route('/idea/add', methods=['POST', 'PUT'])
def add_idea():
    """
    添加idea 返回添加后的基本信息
    :return:
    """
    pass

@act.route('/idea/get', methods=['POST'])
def get_idea():
    """
    查询idea
    :return:
    """
    pass

@act.route('/idea/update', methods=['POST'])
def update_idea():
    """
    修改idea信息
    :return:
    """
    pass

@act.route('/idea/delete', methods=['POST', 'DELETE'])
def del_idea():
    """
    删除idea
    :return:
    """
    pass

######################
#     team
######################

@act.route('/team/add', methods=['POST', 'PUT'])
def add_team():
    """
    添加team 返回添加后的基本信息
    :return:
    """
    pass

@act.route('/team/get', methods=['POST'])
def get_team():
    """
    查询team
    :return:
    """
    pass

@act.route('/team/update', methods=['POST'])
def update_team():
    """
    修改team
    :return:
    """
    pass

@act.route('/team/delete', methods=['POST', 'DELETE'])
def del_team():
    """
    查询team
    :return:
    """
    pass