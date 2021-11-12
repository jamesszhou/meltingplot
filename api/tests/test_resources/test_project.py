""" from api.resources import project
from unittest.mock import MagicMock
import json
from flask import send_file, request, Flask
import numpy as np

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


def test_proper_graph():
    #try:
    with app.test_request_context("/api/resources/graph/") as req:
        req.request.args = {"config": json_config}
        res = graph.Graph().get()
        assert res is not None

def test_improper_graph():
    #try:
    with app.test_request_context("/api/resources/project/") as req:
        pr = project.Project()
        req.request.args = {"config": ""}

        res = graph.Graph().get()
        assert res[0]["error"] is not None and res[1] == 400
 """