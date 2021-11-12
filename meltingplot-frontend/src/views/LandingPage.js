import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

// core components
import ProjectPageHeader from "../components/Headers/ProjectPageHeader.js";
import GraphType from "../components/Content/GraphType.js";
import GraphColor from "../components/Content/GraphColor.js";
import AxesLabels from "../components/Content/AxesLabels.js";
import Legend from "../components/Content/Legend.js";
import GraphDisplay from "../components/Content/GraphDisplay.js";
import PageFooter from "../components/Footers/PageFooter.js";
import PythonDisplay from "../components/Content/PythonDisplay.js";

function LandingPage() {

  const [graphType, setGraphType] = React.useState("None selected");
  const [graphColor, setGraphColor] = React.useState("Blue");
  const [title, setTitle] = React.useState('Project title');
  const [description, setDescription] = React.useState('');
  const [xLabel, setXLabel] = React.useState(false);
  const [yLabel, setYLabel] = React.useState(false);
  const [legend, setLegend] = React.useState(false);

  return (
    <>
      <ProjectPageHeader  title={title} 
                          setTitle={setTitle} 
                          description={description} 
                          setDescription={setDescription} 
      />
      <GraphType  graphType={graphType}
                  setGraphType={setGraphType}
      />
      <GraphColor graphColor={graphColor}
                  setGraphColor={setGraphColor}
      />
      <AxesLabels xLabel={xLabel}
                  setXLabel={setXLabel}
                  yLabel={yLabel}
                  setYLabel={setYLabel}
      />
      <Legend legend={legend}
              setLegend={setLegend}
      />
      <PythonDisplay config={
          {
            "Lines": [
              {
                "GraphType": graphType,
                "GraphData": {"Color": graphColor,
                              "XData": "np.arange(0.0,2.0,0.01)",
                              "YData": "np.sin(2*np.pi*t)",
                              "Label": title}
              },
            ],
            "Attributes": {
              "Title": title,
              "XLabel": xLabel,
              "YLabel": yLabel,
              "Legend": legend
            }
          }
        }
      />
      <GraphDisplay config={
          {
            "Lines": [
              {
                "GraphType": graphType,
                "GraphData": {"Color": graphColor,
                              "XData": "np.arange(0.0,2.0,0.01)",
                              "YData": "np.sin(2*np.pi*t)",
                              "Label": title}
              },
            ],
            "Attributes": {
              "Title": title,
              "XLabel": xLabel,
              "YLabel": yLabel,
              "Legend": legend
            }
          }
        }
      />
      <PageFooter/>
    </>
  );
}

export default LandingPage;