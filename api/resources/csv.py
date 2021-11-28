import os
from botocore.exceptions import ClientError
from flask_restful import Resource
from flask import send_file, request
from werkzeug.utils import secure_filename
import boto3
import pandas as pd
from io import StringIO

s3 = boto3.client('s3',
                  aws_access_key_id=os.environ.get(
                      'AWS_ACCESS'),
                  aws_secret_access_key=os.environ.get(
                      'AWS_SECRET')
                  )
s3r = boto3.resource('s3',
                     aws_access_key_id=os.environ.get(
                         'AWS_ACCESS'),
                     aws_secret_access_key=os.environ.get(
                         'AWS_SECRET')
                     )
BUCKET_NAME = 'meltingplotcsv'


class CSV(Resource):
    def get(self):
        if "project_id" in request.args:
            try:
                obj = s3r.Object(BUCKET_NAME, '{}.csv'.format(
                    request.args["project_id"]))
            except ClientError as error:
                return {"message": "could not retrieve csv"}, 400
            else:
                value = obj.get()['Body'].read().decode('utf-8')
                df = pd.read_csv(StringIO(value), sep=",")
                return {"data": list(df.columns)}

        else:
            return {"message": "could not parse json of request"}, 400

    def post(self):
        if not request.args["project_id"]:
            return {'error': 'no project_id provided'}, 404
        csv = request.files['file']
        if csv:
            filename = secure_filename(csv.filename)
            try:
                s3.upload_fileobj(
                    Bucket=BUCKET_NAME,
                    Fileobj=csv,
                    Key="{}.csv".format(request.args["project_id"])
                )
            except ClientError as e:
                return {'error': e}, 400
            return {'msg': 'upload success'}, 200
