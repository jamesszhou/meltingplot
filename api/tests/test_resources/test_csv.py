
from unittest.mock import MagicMock
import json
from flask import send_file, request, Flask
import os
from unittest.mock import patch

app = Flask(__name__)
def test_improper_get_null_project_id():
    with patch.dict(os.environ, {"s3": "", "s3r": ""}):
        from api.resources import csv
        with app.test_request_context("/api/resources/csv/") as req:
            csv_instance = csv.CSV()
            req.request.args = {"project_id": None}
            try:
                res = csv_instance.get()
                assert False
            except:
                #should raise a 'No Credentials found exception"
                assert True

def test_improper_get_bad_project_id():
    with patch.dict(os.environ, {"s3": "", "s3r": ""}):
        from api.resources import csv
        with app.test_request_context("/api/resources/csv/") as req:
            csv_instance = csv.CSV()
            req.request.args = {"project_id": -99}
            try:
                res = csv_instance.get()
                assert False
            except:
                #should raise a 'No Credentials found exception"
                assert True

def test_improper_get_no_project_id():
    with patch.dict(os.environ, {"s3": "", "s3r": ""}):
        from api.resources import csv
        with app.test_request_context("/api/resources/csv/") as req:
            csv_instance = csv.CSV()
            req.request.args = {}
            res = csv_instance.get()
            assert res[0]["message"] is not None and res[1] == 400

def test_improper_post_null_project_id():
    with patch.dict(os.environ, {"s3": "", "s3r": ""}):
        from api.resources import csv
        with app.test_request_context("/api/resources/csv/") as req:
            csv_instance = csv.CSV()
            req.request.args = {"project_id": None}
            res = csv_instance.post()
            assert res[0]["error"] is not None and res[1] == 404

def test_improper_post_no_file():
    with patch.dict(os.environ, {"s3": "", "s3r": ""}):
        from api.resources import csv
        with app.test_request_context("/api/resources/csv/") as req:
            csv_instance = csv.CSV()
            req.request.args = {"project_id": -99}
            try:
                res = csv_instance.post()
                assert False
            except:
                #should get a BadRequestKeyError
                assert True

def test_improper_post_bad_file():
    with patch.dict(os.environ, {"s3": "", "s3r": ""}):
        from api.resources import csv
        try:
            with app.test_request_context("/api/resources/csv/") as req:
                csv_instance = csv.CSV()
                req.request.args = {"project_id": -99}
                req.request.files = {"file": None}
                res = csv_instance.post()
                assert False
        except:
            #should get an AttributeError
            assert True