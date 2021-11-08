import React from "react";
import ProjectPageHeader from "../Headers/ProjectPageHeader.js";
import GraphDetails from "./GraphDetails.js";
import 'bootstrap/dist/css/bootstrap.min.css';

function ProjectSpecs() {

    const [graphType, setGraphType] = React.useState("None selected");
    
    const [title, setTitle] = React.useState('Project title');
    const [description, setDescription] = React.useState('');

    return (
        <>
            <ProjectPageHeader  title={title} 
                                setTitle={setTitle} 
                                description={description} 
                                setDescription={setDescription} 
            />
            <GraphDetails  graphType={graphType}
                        setGraphType={setGraphType}
            />
        </>
    );
}

export default ProjectSpecs;