
from unittest.mock import MagicMock
import json
from flask import send_file, request, Flask
import os
from unittest.mock import patch

app = Flask(__name__)
def test_improper_get_no_user():
    with patch.dict(os.environ, {"DATABASE_URL": ""}):
        from api.resources import user
        with app.test_request_context("/api/resources/user/") as req:
            usr = user.User()
            req.request.args = {"username": None}
            res = usr.get()
            assert res[0]["error"] is not None and res[1] == 404

def test_improper_get_no_password():
    with patch.dict(os.environ, {"DATABASE_URL": ""}):
        from api.resources import user
        with app.test_request_context("/api/resources/user/") as req:
            usr = user.User()
            req.request.args = {"username": "test", "password": None}
            res = usr.get()
            assert res[0]["error"] is not None and res[1] == 404

def test_improper_get_no_user_found():
    with patch.dict(os.environ, {"DATABASE_URL": ""}):
        from api.resources import user
        with app.test_request_context("/api/resources/user/") as req:
            usr = user.User()
            req.request.args = {"username": "test", "password": "test"}
            res = usr.get()
            assert res[0]["error"] is not None and res[1] == 404

def test_improper_put():
    with patch.dict(os.environ, {"DATABASE_URL": ""}):
        from api.resources import user
        with app.test_request_context("/api/resources/user/") as req:
            usr = user.User()
            req.request.args = {}
            res = usr.put()
            assert res[0]["error"] is not None and res[1] == 400

def test_improper_post():
    with patch.dict(os.environ, {"DATABASE_URL": ""}):
        from api.resources import user
        with app.test_request_context("/api/resources/user/") as req:
            usr = user.User()
            req.request.args = {}
            res = usr.post()
            assert res[0]["error"] is not None and res[1] == 400