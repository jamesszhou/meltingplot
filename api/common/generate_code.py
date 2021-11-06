import json
graph_types = {
    "Line": "\nplt.plot({})"
}
attributes = {
    "Title": "\nplt.title(\"{}\")",
    "X_Label": "\nplt.xlabel(\"{}\")",
    "Y_Label": "\nplt.ylabel(\"{}\")"
}


def generate_code(request):
    request = json.loads(request)
    code = """import matplotlib
import matplotlib.pyplot as plt 
import numpy as np
matplotlib.use('Agg')
t = np.arange(0.0, 2.0, 0.01)
s = np.sin(2*np.pi*t)
"""
    print(type(request))
    code += graph_types[request["GraphType"]].format('t,s')
    for key, value in request["Attributes"].items():
        code += attributes[key].format(value)
    return code
