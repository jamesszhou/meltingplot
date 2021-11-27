const graphTypes = (graphType, innerCode) => {
    switch (graphType) {
        case "Scatter":
            return `\nplt.scatter(${innerCode})`;
        case "Bar":
            return `\nplt.bar(${innerCode})`;
        default:
            return `\nplt.plot(${innerCode})`;
    }
}

const graphSpecs = (attribute, value) => {
    switch (attribute) {
        case "Color":
            return `, color='${value}'`;
        case "XData":
            return "";
        case "YData":
            return "";
        case "Label":
            return `, label='${value}'`;
        case "LineStyle":
            return `, linestyle='${value}'`;
        default:
            return "";
    }
}

const attributes = (attribute, value) => {
    switch (attribute) {
        case "Title":
            return `\nplt.title("${value}")`;
        case "XLabel":
            return `\nplt.xlabel("${value}")`;
        case "YLabel":
            return `\nplt.ylabel("${value}")`;
        default:
            return `\nplt.legend()`;
    }
}


function generateCode(request) {
    const requestObj = request;
    let code = "import matplotlib\n" +
        "import matplotlib.pyplot as plt\n" +
        "import numpy as np";

    requestObj["Lines"].forEach(line => {
        const xData = line["GraphData"]["XData"];
        const yData = line["GraphData"]["YData"];
        let innerCode = `${xData},${yData}`;
        for (const [spec, value] of Object.entries(line["GraphData"])) {
            if (value != null && graphSpecs(spec, value) && graphSpecs(spec, value) !== "") {
                innerCode += graphSpecs(spec, value);
            }
        }
        code += graphTypes(line["GraphType"], innerCode);
    });
    for (const [key, value] of Object.entries(requestObj["Attributes"])) {
        if (value){
            code += attributes(key, value);
        }
    }

    return code;
}

// {
//     "Lines": [
//         {
//             "GraphType": "Line",
//             "GraphData": {"Color": "Blue",
//                           "XData": "xdata[0:15]",
//                           "YData": "ydata[16:30]",
//                           "Label": "Line1"}
//         },
//         {
//             "GraphType": "Line",
//             "GraphData": {"Color": "Red",
//                           "XData": "xdata[0:15]",
//                           "YData": "ydata[16:30]",
//                           "Label": "Line2"}
//          }
//     ],
//     "Attributes": {
//         "Title": "sample graph",
//         "XLabel": "Time",
//         "YLabel": "Distance",
//         "Legend": true
//      }
// }

export { generateCode };
