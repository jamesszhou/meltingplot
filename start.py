from api.resources.project import Project, Projects
from api.resources.graph import Graph
import os
from flask_restful import Api
from api.database import db
from flask import Flask, render_template


app = Flask(__name__,
            static_folder='meltingplot-frontend/build/static', template_folder="meltingplot-frontend/build")
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get(
    'DATABASE_URL').replace("://", "ql://", 1)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

api = Api(app)

@app.route("/")
def react():
    return render_template('index.html')

api.add_resource(Graph, '/api/graph/')
api.add_resource(Project, '/api/project/')
api.add_resource(Projects, '/api/projects/')
