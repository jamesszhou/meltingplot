
import os
import io
import subprocess
from flask_restful import Resource
from flask import send_file, after_this_request, request
from ..common.generate_code import generate_code
import matplotlib.pyplot as plt
import numpy as np


class Graph(Resource):
    def get(self):
        code = generate_code(request.args["config"])
        if code is None:
            return {"error": "could not parse json of request"}, 400
        exec(code)
        buf = io.BytesIO()
        plt.savefig(buf, format='png')
        plt.close()
        buf.seek(0)
        return send_file(buf, mimetype='image/png')
