import io
from flask_restful import Resource
from flask import send_file, request
import matplotlib.pyplot as plt
import numpy as np
from api.common.generate_code import generate_code
import boto3

s3 = boto3.client('s3',
                  aws_access_key_id=os.environ.get(
                      'AWS_ACCESS'),
                  aws_secret_access_key=os.environ.get(
                      'AWS_SECRET')
                  )
BUCKET_NAME = 'meltingplotcsv'


class Graph(Resource):
    def get(self):
        try:
            code = generate_code(request.args["config"])
        except:
            return None
        if code is None:
            return {"error": "could not parse json of request"}, 400
        exec(code)
        buf = io.BytesIO()
        plt.savefig(buf, format='png')
        plt.close()
        buf.seek(0)
        return send_file(buf, mimetype='image/png')
