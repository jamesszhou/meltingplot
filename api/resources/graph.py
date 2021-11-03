
import os
import subprocess
import uuid
from flask_restful import Resource
from flask import send_file, after_this_request, request
from ..common.generate_code import generate_code


class Graph(Resource):
    def get(self):
        code = generate_code(request.args["code"])
        print(request.args["code"])
        hash = uuid.uuid4().hex
        with open(hash + ".py", 'w') as f:
            f.write(code)
            f.write("\nplt.savefig(\""+hash+".png\")")
            f.close()
        subprocess.call("python3 " + hash + ".py", shell=True)

        @after_this_request
        def remove_file(response):
            try:
                os.remove(hash + ".py")
                os.remove(hash + ".png")
            except Exception as error:
                return {'message': 'Server has encountered some error'}, 500
            return response
        return send_file(hash+".png", mimetype='image/png')
