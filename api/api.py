from flask_restful import Api
from flask import Flask
from .resources.graph import Graph


app = Flask(__name__, static_url_path='',
            static_folder='meltingplot-frontend/build')
api = Api(app)

api.add_resource(Graph, '/api/graph/')
