import React from "react";
import ProjectPageHeader from "../Headers/ProjectPageHeader.js";
import GraphType from "./GraphType.js";
import GraphColor from "./GraphColor.js";
import AxesLabels from "./AxesLabels.js";
import Legend from "./Legend.js";
import 'bootstrap/dist/css/bootstrap.min.css';

function ProjectSpecs() {

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
        </>
    );
}

export default ProjectSpecs;