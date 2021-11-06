import os
import psycopg2
from flask import request, jsonify
from flask_restful import Resource, reqparse
from ..models.ProjectsModel import ProjectsModel, ProjectsSchema

DATABASE_URL = os.environ['DATABASE_URL']
# conn = psycopg2.connect(DATABASE_URL, sslmode='require')
conn = psycopg2.connect(DATABASE_URL)
cur = conn.cursor()

project_schema = ProjectsSchema()


class Project(Resource):
    def get(self):
        """
        Get a project by id
        """
        if not request.args["project_id"]:
            return {'error': 'no project_id provided'}, 404
        project = ProjectsModel.get_project(request.args["project_id"])
        if not project:
            return {'error': 'project not found'}, 404

        ser_project = project_schema.dump(project)
        return ser_project, 200

    def delete(self):
        if not request.args["project_id"]:
            return {'error': 'no project_id provided'}, 404
        project = ProjectsModel.delete_project(request.args["project_id"])
        return {'message': 'deleted'}, 204

    def put(self):
        req_data = jsonify(request.args).json
        try:
            data = project_schema.load(req_data, partial=(
                "description", "title", "config"))
        except Exception as error:
            return {'error': error.message}, 400

        project = ProjectsModel.get_project(request.args["project_id"])
        project.update(data)
        ser_project = project_schema.dump(project)
        return ser_project, 200

    def post(self):
        """
        Create Blogpost Function
        """
        req_data = jsonify(request.args).json
        try:
            data = project_schema.load(req_data, partial=("project_id",))
        except Exception as error:
            return {'error': error.message}, 400
        project = ProjectsModel(data)
        project.save()
        data = project_schema.dump(project)
        return data, 201
