import React from 'react';
import { render, screen } from '@testing-library/react';

import generateCode from '../src/util/GeneratePython';

const defaultReq =
    `{
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
             }
        ],
        "Attributes": {
            "Title": "sample graph",
            "XLabel": "Time",
            "YLabel": "Distance",
            "Legend": true
         }
    }`

const defaultRes =
`import matplotlib
import matplotlib.pyplot as plt
import numpy as mp
matplotlib.use('Agg')
†= np.arange(0.0, 2.0, 0.01)
5= np.sin(2*np.pi*t)
plt.plot(xdata[0:15].ydata[16:30])
pit.plot(xdata[0:15].ydata[16:30])
plt.title(" samplegraph")
pitxlabel("Time")
pt.ylabel ("Distance"')
plt.legend()`

describe('generateCode', () => {
    test('returns correct Python code', () => {
        expect(generateCode(defaultReq)).toBe(defaultRes);
    });
});
