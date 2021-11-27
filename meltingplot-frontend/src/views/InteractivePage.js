import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/FrontPage.css';

// core components
import ProjectPageHeader from "../components/Headers/ProjectPageHeader.js";
import GraphType from "../components/Content/GraphType.js";
import GraphColor from "../components/Content/GraphColor.js";
import AxesLabels from "../components/Content/AxesLabels.js";
import Legend from "../components/Content/Legend.js";
import GraphDisplay from "../components/Content/GraphDisplay.js";
import PageFooter from "../components/Footers/PageFooter.js";
import PythonDisplay from "../components/Content/PythonDisplay.js";
import {Row, Col, Button, Input, Card, CardBody, CardTitle, Container} from "reactstrap"
import { useLocation} from 'react-router-dom';
import queryString  from 'query-string';

/* Main page alloweing user to create graph */
function InteractivePage() {

  const projectId = queryString.parse(useLocation().search)?.project_id;
  const userId = queryString.parse(useLocation().search)?.user_id;
  const [title, setTitle] = React.useState('Project title');
  const [description, setDescription] = React.useState('');
  const [xLabel, setXLabel] = React.useState(false);
  const [yLabel, setYLabel] = React.useState(false);
  const [legend, setLegend] = React.useState(false);

  const [inputList, setInputList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

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
    setInputList([...inputList, { GraphType: undefined, GraphData: {Color: undefined, XData: undefined, YData: undefined, Label: undefined} }]);
  };

  const getProject = () => {

    // Retrieve user's projects
    fetch(`${window.location.origin}/api/project/?project_id=${projectId}`, {
        method: "GET"
    }).then((response) => response.json())
        .then(
            (value) => {
              console.log(value);
              setTitle(value.title);
              setDescription(value.description);
              const config = JSON.parse(value.config)
              setInputList(config.Lines)
              setXLabel(config.Attributes.XLabel);
              setYLabel(config.Attributes.YLabel);
              setLegend(config.Attributes.Legend);
              setLoading(false)
            }
        )
        .catch((error) =>{
            alert("Could not retrieve project config for user.");
            setLoading(false);
        }
        )
}
  const getConfig = () => ({
    
      "Lines": inputList,
      "Attributes": {
        "Title": title,
        "XLabel": xLabel,
        "YLabel": yLabel,
        "Legend": legend
      }
    
  });

  React.useEffect(() => {
    if (projectId !== undefined && userId !== undefined){
      getProject()
    }
    else{
      setLoading(false);
    }
  }, []);

  return (
    <>
    {!loading ?
    <div className="bg" style={{
      width: '100vw',
      height: '100vh',
    }}>
      <ProjectPageHeader  title={title} 
                          setTitle={setTitle} 
                          description={description} 
                          setDescription={setDescription} 
                          getConfig = {getConfig}
                          project_id = {projectId}
                          user_id = {userId}
      />
      <Container>
        <Button onClick={handleAddClick}>Add Line</Button>
        {inputList.map((x, i) => {
          return (
            <Container>
            <Card>
              <CardTitle>
              Title:
                <Row>
                  <Col>
                  <Input
                  className="ml10"
                  name="Label"
                  placeholder="Line title"
                  value={x.GraphData.Label}
                  onChange={e => handleGraphData(e, i)}
                />
                </Col>
                <Col  md={{ size: 2, offset: 4 }}>
                <div className="btn-box">
                  {inputList.length !== 0 && <Button
                    className="mr10"
                    onClick={() => handleRemoveClick(i)}>Remove Line</Button>}
                  
                </div>
                  </Col>
                </Row>
              </CardTitle>
              <CardBody>
              <Row>
              <GraphType graphType={x.GraphType}
                      setGraphType={e => handleInputChange(e,i)}/>
                <GraphColor graphColor={x.GraphData.Color}
                      setGraphColor={e => handleGraphData(e,i)}
                />
              </Row>
              <Row>
                <Col>
                  <div>
                  X Data:
                  </div>
                  <Input
                      name="XData"
                      placeholder="X Axis Data"
                      value={x.GraphData.XData}
                      onChange={e => handleGraphData(e, i)}
                    />
                </Col>
                <Col>
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
                  </Col>
                  </Row>
              </CardBody>
            </Card>
            </Container>
          );
        })}
        <div>
          {JSON.stringify(inputList)}
        </div>
        
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
        <PythonDisplay config={getConfig()}/>
        </Col>
      <Col>
      <GraphDisplay config={getConfig()}/>
      </Col>
      <Col/>
      </Row>
      <PageFooter/>
      </div> : <div> LOADING...</div>}
    </>
  );
}

export default InteractivePage;