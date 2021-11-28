import io
import os
from flask_restful import Resource
from flask import send_file, request
import matplotlib.pyplot as plt
import numpy as np
from api.common.generate_code import generate_code
import boto3
from botocore.exceptions import ClientError
from io import StringIO
import pandas as pd

s3 = boto3.resource('s3',
                    aws_access_key_id=os.environ.get(
                        'AWS_ACCESS'),
                    aws_secret_access_key=os.environ.get(
                        'AWS_SECRET')
                    )
BUCKET_NAME = 'meltingplotcsv'


class Graph(Resource):
    def get(self):
        code = ""
        if "project_id" in request.args:
            try:
                obj = s3.Object(BUCKET_NAME, '{}.csv'.format(
                    request.args["project_id"]))
                value = obj.get()['Body'].read().decode('utf-8')
                df = pd.read_csv(StringIO(value), sep=",")
                code = generate_code(request.args["config"], True)
            except ClientError as error:
                # no csv is present for the requested project_id, generate code as if no project_id is passed
                try:
                    code = generate_code(request.args["config"], False)
                except:
                    return {"message": "could not generate python code"}, 400
                if code is None:
                    return {"message": "could not parse json of request"}, 400
        else:
            try:
                code = generate_code(request.args["config"], False)
            except:
                return {"message": "could not generate python code"}, 400
            if code is None:
                return {"message": "could not parse json of request"}, 400
        print(code)
        try:
            exec(code)
        except Exception as e:
            template = "An exception of type {0} occurred. Arguments:\n{1!r}"
            message = template.format(type(e).__name__, e.args)
            return {"message": message}, 400

        buf = io.BytesIO()
        plt.savefig(buf, format='png')
        plt.close()
        buf.seek(0)
        return send_file(buf, mimetype='image/png')
