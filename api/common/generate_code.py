"""
This module handles matplotlib code generation based upon our configs passed in.
Example Config:

{
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
        "Legend": true
    }
}
"""

import json
graph_types = {
    "Line": "\nplt.plot({})",
    "Scatter": "\nplt.scatter({})",
    "Bar": "\nplt.bar({})",
}
graph_specs = {
    "Color": ", color=\'{}\'",
    "XData": None,
    "YData": None,
    "Label": ", label=\'{}\'",
    "LineStyle": ", linestyle=\'{}\'"
}

attributes = {
    "Title": "\nplt.title(\"{}\")",
    "XLabel": "\nplt.xlabel(\"{}\")",
    "YLabel": "\nplt.ylabel(\"{}\")",
    "Legend": "\nplt.legend()"
}


def generate_code(request):
    """

    """
    try:
        request = json.loads(request)
    except ValueError:
        return None
    code = """import matplotlib
import matplotlib.pyplot as plt
import numpy as np
matplotlib.use('Agg')
t = np.arange(0.0, 2.0, 0.01)
s = np.sin(2*np.pi*t)
"""
    for line in request["Lines"]:
        innercode = "{},{}".format(
            line["GraphData"]["XData"], line["GraphData"]["YData"])
        for spec, value in line["GraphData"].items():
            if graph_specs[spec]:
                innercode += graph_specs[spec].format(value)
        code += graph_types[line["GraphType"]].format(innercode)
    for key, value in request["Attributes"].items():
        code += attributes[key].format(value)
    return code
