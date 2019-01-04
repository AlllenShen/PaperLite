from flask import Blueprint

act = Blueprint('activity', __name__)

from . import *