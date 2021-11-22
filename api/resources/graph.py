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
        if not request.args["project_id"]:
            try:
                code = generate_code(request.args["config"], False)
            except:
                return None
            if code is None:
                return {"error": "could not parse json of request"}, 400
        else:
            try:
                obj = s3.Object(BUCKET_NAME, '{}.csv'.format(
                    request.args["project_id"]))
            except ClientError as error:
                if error.response['Error']['Code'] == "404":
                    # no csv is present for the requested project_id, generate code as if no project_id is passed
                    code = generate_code(request.args["config"], False)
                else:
                    return {"error": "could not retrieve csv"}, 400
            else:
                value = obj.get()['Body'].read().decode('utf-8')
                df = pd.read_csv(StringIO(value), sep=",")
                code = generate_code(request.args["config"], True)
        exec(code)
        buf = io.BytesIO()
        plt.savefig(buf, format='png')
        plt.close()
        buf.seek(0)
        return send_file(buf, mimetype='image/png')
