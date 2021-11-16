import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

// core components
import ProjectPageHeader from "../components/Headers/ProjectPageHeader.js";
import GraphType from "../components/Content/GraphType.js";
import GraphColor from "../components/Content/GraphColor.js";
import AxesLabels from "../components/Content/AxesLabels.js";
import Legend from "../components/Content/Legend.js";
import GraphDisplay from "../components/Content/GraphDisplay.js";
import Line from "../components/Content/Line.js";
import PageFooter from "../components/Footers/PageFooter.js";
import PythonDisplay from "../components/Content/PythonDisplay.js";
import {Row, Col, Button, Input} from "reactstrap"


function LandingPage() {

  const [graphType, setGraphType] = React.useState("None selected");
  const [graphColor, setGraphColor] = React.useState("Blue");
  const [title, setTitle] = React.useState('Project title');
  const [description, setDescription] = React.useState('');
  const [xLabel, setXLabel] = React.useState(false);
  const [yLabel, setYLabel] = React.useState(false);
  const [legend, setLegend] = React.useState(false);

  const [inputList, setInputList] = React.useState([{ GraphType: null, GraphData: {Color: null, XData: null, YData: null, Label: null} }]);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
  const handleGraphData = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index]["GraphData"][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { GraphType: null, GraphData: {Color: null, XData: null, YData: null, Label: null} }]);
  };

  return (
    <>
      <ProjectPageHeader  title={title} 
                          setTitle={setTitle} 
                          description={description} 
                          setDescription={setDescription} 
      />
{inputList.map((x, i) => {
        return (
          <>
          <div>
            X Data:
          </div>
            {/* <GraphType graphType={x.GraphType}
                  setGraphType={e => handleInputChange(e,i)}/> */}
            <Input
              name="XData"
              placeholder="X Axis Data"
              value={x.GraphData.XData}
              onChange={e => handleGraphData(e, i)}
            />
            <div>
            Y Data:
          </div>
            <Input
              className="ml10"
              name="YData"
              placeholder="Y Axis Data"
              value={x.GraphData.YData}
              onChange={e => handleGraphData(e, i)}
            />
            <div className="btn-box">
              {inputList.length !== 1 && <Button
                className="mr10"
                onClick={() => handleRemoveClick(i)}>Remove</Button>}
              {inputList.length - 1 === i && <Button onClick={handleAddClick}>Add</Button>}
            </div>
          </>
        );
      })}
      <div>
        {JSON.stringify(inputList)}
      </div>
      
      <GraphType  graphType={graphType}
                  setGraphType={setGraphType}
      />
      <GraphColor graphColor={graphColor}
                  setGraphColor={setGraphColor}
      />
      <Line/>
      <AxesLabels xLabel={xLabel}
                  setXLabel={setXLabel}
                  yLabel={yLabel}
                  setYLabel={setYLabel}
      />
      <Legend legend={legend}
              setLegend={setLegend}
      />
      <Row>
      <Col/>

        <Col>
        <PythonDisplay config={
          {
            "Lines": inputList,
            "Attributes": {
              "Title": title,
              "XLabel": xLabel,
              "YLabel": yLabel,
              "Legend": legend
            }
          }
        }
      />
        </Col>
      <Col>
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
      </Col>
      <Col/>
      </Row>
      
      
      <PageFooter/>
    </>
  );
}

export default LandingPage;