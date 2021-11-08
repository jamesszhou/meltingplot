from .resources.project import Project, Projects
from .resources.graph import Graph
import os
from flask_restful import Api
from .database import db
from flask import Flask


app = Flask(__name__, static_url_path='',
            static_folder='meltingplot-frontend/build')
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get(
    'DATABASE_URL').replace("://", "ql://", 1)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

api = Api(app)

api.add_resource(Graph, '/api/graph/')
api.add_resource(Project, '/api/project/')
api.add_resource(Projects, '/api/projects/')
