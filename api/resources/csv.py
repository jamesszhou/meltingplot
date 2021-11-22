import os
from botocore.exceptions import ClientError
from flask_restful import Resource
from flask import send_file, request
from werkzeug.utils import secure_filename
import boto3

s3 = boto3.client('s3',
                  aws_access_key_id=os.environ.get(
                      'AWS_ACCESS'),
                  aws_secret_access_key=os.environ.get(
                      'AWS_SECRET')
                  )
BUCKET_NAME = 'meltingplotcsv'


class CSV(Resource):
    def post(self):
        if not request.args["project_id"]:
            return {'error': 'no project_id provided'}, 404
        csv = request.files['file']
        if csv:
            filename = secure_filename(csv.filename)
            try:
                s3.upload_file(
                    Bucket=BUCKET_NAME,
                    Filename=filename,
                    Key="{}.csv".format(request.args["project_id"])
                )
            except ClientError as e:
                return {'error': e}, 400
            return {'msg': 'upload success'}, 200
