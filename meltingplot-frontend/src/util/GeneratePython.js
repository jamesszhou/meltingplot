/**
   * Generates python code to plot a certain kind of graph
   *
   * @param {string} graphType The type of graph being created
   * @param {string} innerCode The code corresponding to the graphed data
   * @return {string} The python code to create a graph of graphType given data in innerCode
   */
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

/**
   * Generates python code to assign a value to a given graph specification
   *
   * @param {string} attribute The attribute of the graph being set
   * @param {string} value The value being assigned to the attribute
   * @return {string} The python code to assign value to attribute
   */
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

/**
   * Generates python code to assign a value to a given graph attribute
   *
   * @param {string} attribute The attribute of the graph being set
   * @param {string} value The value being assigned to the attribute
   * @return {string} The python code to assign value to attribute
   */
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

/**
   * Generate python code from a graph configuration object.
   *
   * @param {string} request The string representation of the config object
   * @return {string} The python code to generate the described graph
   */
function generateCode(request) {
    const requestObj = JSON.parse(request)
    let code = "import matplotlib\n" +
        "import matplotlib.pyplot as plt\n" +
        "import numpy as np\n" +
        "matplotlib.use('Agg')\n" +
        "t = np.arange(0.0, 2.0, 0.01)\n" +
        "s = np.sin(2*np.pi*t)";

    requestObj["Lines"].forEach(line => {
        const xData = line["GraphData"]["XData"];
        const yData = line["GraphData"]["YData"];
        let innerCode = `${xData},${yData}`;
        for (const [spec, value] of Object.entries(line["GraphData"])) {
            if (graphSpecs[spec]) {
                innerCode += graphSpecs[spec].format(value);
            }
        }
        code += graphTypes(line["GraphType"], innerCode);
    });
    for (const [key, value] of Object.entries(requestObj["Attributes"])) {
        console.log(key + " " + value);
        code += attributes(key, value);
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
