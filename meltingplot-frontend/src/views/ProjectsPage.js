import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation, Link } from 'react-router-dom';
import queryString  from 'query-string';
import { Card, CardBody, Container } from "reactstrap";

// core components
import ProjectsList from "../components/Content/ProjectsList";

function ProjectsPage() {

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
                alert("Could not retrieve projects for user.");
                setLoading(false);
            }
            )
    }
   
    const [loading, setLoading] = React.useState(true);
    const [projectsJson, setProjectsJson] = React.useState(undefined);
    React.useEffect(() => {
        getProjects()
      });
    return (
        <>
            <Container>
                <h1>
                    Projects:
                </h1>
            </Container>
            {!loading ? <ProjectsList projects={projectsJson} /> : <div> LOADING...</div>}
            
            <Container hidden={userId !== undefined && userId !== ""}>
                <Card>
                    <CardBody>
                        Please <Link to={"/index"}> log in </Link>to see your saved projects.
                    </CardBody>
                </Card>
            </Container>
        </>
    );
}

export default ProjectsPage;