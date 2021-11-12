
from unittest.mock import MagicMock
import json
from flask import send_file, request, Flask
import numpy as np
import os
from unittest.mock import patch

xdata = np.arange(15).tolist()
ydata = np.arange(30).tolist()

json_config = json.dumps({
        "Lines": [
            {
                "GraphType": "Line",
                "GraphData": {"Color": "Blue",
                            "XData": xdata[0:15],
                            "YData": ydata[15:30],
                            "Label": "Line1"}
            },
            {
                "GraphType": "Line",
                "GraphData": {"Color": "Red",
                            "XData": xdata[0:15],
                            "YData": ydata[15:30],
                            "Label": "Line2"}
            },
        ],
        "Attributes": {
            "Title": "sample graph",
            "XLabel": "Time",
            "YLabel": "Distance",
            "Legend": True
        }
    })

app = Flask(__name__)
def test_improper_get():
    with patch.dict(os.environ, {"DATABASE_URL": ""}):
        from api.resources import project
        with app.test_request_context("/api/resources/project/") as req:
            pr = project.Project()
            req.request.args = {"project_id": None}
            res = pr.get()
            assert res[0]["error"] is not None and res[1] == 404

def test_get_no_project():
    with patch.dict(os.environ, {"DATABASE_URL": ""}):
        from api.resources import project
        with app.test_request_context("/api/resources/project/") as req:
            pr = project.Project()
            req.request.args = {"project_id": 1}
            res = pr.get()
            assert res[0]["error"] is not None and res[1] == 404

def test_improper_delete():
    with patch.dict(os.environ, {"DATABASE_URL": ""}):
        from api.resources import project
        with app.test_request_context("/api/resources/project/") as req:
            pr = project.Project()
            req.request.args = {"project_id": None}
            res = pr.delete()
            assert res[0]["error"] is not None and res[1] == 404

def t_proper_delete():
    with patch.dict(os.environ, {"DATABASE_URL": ""}):
        from api.resources import project
        with app.test_request_context("/api/resources/project/") as req:
            pr = project.Project()
            req.request.args = {"project_id": 1}
            res = pr.delete()
            assert res[0]["message"] is not null and res[1] == 204

def test_improper_put():
    with patch.dict(os.environ, {"DATABASE_URL": ""}):
        from api.resources import project
        with app.test_request_context("/api/resources/project/") as req:
            pr = project.Project()
            req.request.args = {}
            res = pr.put()
            assert res[0]["error"] is not None and res[1] == 400

def test_improper_post():
    with patch.dict(os.environ, {"DATABASE_URL": ""}):
        from api.resources import project
        with app.test_request_context("/api/resources/project/") as req:
            pr = project.Project()
            req.request.args = {}
            res = pr.post()
            assert res[0]["error"] is not None and res[1] == 400

def test_improper_projects_get():
        from api.resources import project
        with app.test_request_context("/api/resources/project/") as req:
            pr = project.Projects()
            req.request.args = {"user_id": None}
            res = pr.get()
            assert res[0]["error"] is not None and res[1] == 404

def test_improper_projects_get2():
        from api.resources import project
        with app.test_request_context("/api/resources/project/") as req:
            pr = project.Projects()
            req.request.args = {"user_id": 1}
            res = pr.get()
            assert res[0]["error"] is not None and res[1] == 404