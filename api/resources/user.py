import os
import psycopg2
from flask import request, jsonify
from flask_restful import Resource
from api.models.users_model import UsersModel, UsersSchema

DATABASE_URL = os.environ['DATABASE_URL']
if(DATABASE_URL is not None and DATABASE_URL != ""):
    conn = psycopg2.connect(DATABASE_URL, sslmode='require')
    cur = conn.cursor()

user_schema = UsersSchema()


class User(Resource):
    def get(self):
        """
        Get a user_id by username and password
        """
        print(request.args)
        if "username" not in request.args or "password" not in request.args:
            return {'error': 'no username/password provided'}, 404
        user = UsersModel.get_user(
            request.args["username"], request.args["password"])
        if not user:
            return {'error': 'Incorrect Username/Password'}, 404

        ser_user = user_schema.dump(user)
        return ser_user, 200

    def put(self):
        req_data = jsonify(request.args).json
        try:
            data = user_schema.load(req_data)
        except Exception as error:
            return {'error': error}, 400

        user = UsersModel.get_user_by_id(
            request.args["user_id"])
        user.update(data)
        ser_user = user_schema.dump(user)
        return ser_user, 200

    def post(self):
        """
        Create User
        """
        req_data = jsonify(request.args).json
        try:
            data = user_schema.load(req_data, partial=("user_id",))
        except Exception as error:
            return {'error': error}, 400
        user = UsersModel(data)
        user.save()
        data = user_schema.dump(user)
        return data, 201
