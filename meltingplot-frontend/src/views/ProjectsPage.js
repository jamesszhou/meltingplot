import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/ProjectsPage.css';

import queryString  from 'query-string';
import { Card, CardBody, Container, Row, Col, Button } from "reactstrap";
import {useHistory, useLocation, Link} from "react-router-dom";

// core components
import ProjectsList from "../components/Content/ProjectsList";

function ProjectsPage() {
    const history = useHistory();

    // Use url parameter 'user_id', if not present set to 'undefined'
    const userId = queryString.parse(useLocation().search)?.user_id;
    
    const getProjects = () => {
        if (userId === undefined || userId === "") {
            return [];
        }

        // Retrieve user's projects
        fetch(`${window.location.origin}/api/projects/?user_id=${userId}`, {
            method: "GET"
        }).then((response) => response.json())
            .then(
                (value) => {
                    setProjectsJson(value);
                    setLoading(false);
                }
            )
            .catch((error) =>{
                setLoading(false);
            }
            )
    }
    
    //const [projectsJson, setProjectsJson] = React.useState([{"title": "dummy title name", "description": "yeah i think it's comma"}]);
    const [projectsJson, setProjectsJson] = React.useState(getProjects);

    const createProject = () => {
        fetch(`${window.location.origin}/api/project/?user_id=${userId}&title=New Project`, {
            method: "POST"
        })
        .then((response) => response.json().then((data) => ({status: response.status, body: data})))
        .then( (obj) => {
            if (obj.status === 201){
                history.push(`/interactive-page/?user_id=${obj.body.user_id}&project_id=${obj.body.project_id}`);
            }
            else{
                alert("Could not create new project");
            }
        }
        ).catch(
            (error) =>{
                console.log(error);
            }
            
        )
    }
    
    const [loading, setLoading] = React.useState(true);
    

    const deleteProject  = (project_id, index) => {
         fetch(`${window.location.origin}/api/project/?project_id=${project_id}`, {
                method: "DELETE"
            }).then((response) => 
                {if (response.ok){
                let clone_project_list = {...projectsJson};
                
                let new_project_list = Object.values(clone_project_list);
                new_project_list.splice(index, 1);
                setProjectsJson(new_project_list);
                alert("project successfully deleted");
            }
        })
            .catch((error) =>{
                alert("could not delete project");
            }
            )

    }
    const loadingProjectList = () => {
         
            if (loading){
                return(
                    <div hidden={userId === undefined || userId === ""}> LOADING...</div>
                )
            }
            else{
                return <ProjectsList projects={projectsJson} deleteProject={deleteProject}/>
            }

    }
    React.useEffect(() => {
        getProjects();
      }, []);
    return (
        <div className="bg" style={{
            width: '100vw',
            height: '100vh',
        }}>
            <Container>
                <br/>
                <Row>
                    <Col xs={9}>
                        <h1>
                            Projects:
                        </h1>   
                    </Col>
                    <Col>
                        <Button hidden={userId === undefined || userId === ""} onClick={createProject}>
                            Create New Project
                        </Button>
                    </Col>

                </Row>
            </Container >
            {loadingProjectList()}
            
            <Container hidden={userId !== undefined && userId !== ""}>
                <Card>
                    <CardBody>
                        Please <Link to={"/index"}> log in </Link>to see your saved projects.
                    </CardBody>
                </Card>
            </Container>
        </div>
    );
}

export default ProjectsPage;