from api.common.generate_code import generate_code
import json

def test_improper_json():
    request = "this is a string not json"
    res = generate_code(request)
    #print(res)
    assert res is None


def test_improper_json2():
    request = {
        "Lines": [
            {
                "GraphType": "Line",
                "GraphData": {"Color": "Blue",
                            "XData": "xdata[0:15]",
                            "YData": "ydata[16:30]",
                            "Label": "Line1"}
            },
            {
                "GraphType": "Line",
                "GraphData": {"Color": "Red",
                            "XData": "xdata[0:15]",
                            "YData": "ydata[16:30]",
                            "Label": "Line2"}
            },
        ],
        "Attributes": {
            "Title": "sample graph",
            "XLabel": "Time",
            "YLabel": "Distance",
            "Legend": True
        }
    }
    res = generate_code(request)
    #print(res)
    assert res is None

def test_proper_json():
    request = {
        "Lines": [
            {
                "GraphType": "Line",
                "GraphData": {"Color": "Blue",
                            "XData": "xdata[0:15]",
                            "YData": "ydata[16:30]",
                            "Label": "Line1"}
            },
            {
                "GraphType": "Line",
                "GraphData": {"Color": "Red",
                            "XData": "xdata[0:15]",
                            "YData": "ydata[16:30]",
                            "Label": "Line2"}
            },
        ],
        "Attributes": {
            "Title": "sample graph",
            "XLabel": "Time",
            "YLabel": "Distance",
            "Legend": True
        }
    }
    res = generate_code(json.dumps(request))
    #print(res)
    assert res is not None