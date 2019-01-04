from flask import Flask, g
from flask_cors import CORS
from models import session_factory
from sqlalchemy.orm import scoped_session

def create_app():
    app = Flask(__name__)
    CORS(app)

    from app.act import act
    CORS(act)
    app.register_blueprint(act, url_prefix='/activity')

    from app.user import user
    CORS(user)
    app.register_blueprint(user, url_prefix='/user')

    @app.before_request
    def before_request():
        g.session = scoped_session(session_factory)() # 为每个请求添加scoped session

    @app.after_request
    def after_request():
        g.session.close()

    return app





