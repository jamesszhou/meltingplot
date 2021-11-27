import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/ProjectsPage.css';
import { useLocation } from 'react-router-dom';
import queryString  from 'query-string';
import { Card, CardBody, Container } from "reactstrap";

// core components
import ProjectsList from "../components/Content/ProjectsList";

function ProjectsPage() {

    // Use url parameter 'user_id', if not present set to 'undefined'
    const userId = queryString.parse(useLocation().search)?.user_id;

    const getProjects = () => {
        if (userId === undefined) {
            return [];
        }

        // Retrieve user's projects
        fetch(`${window.location.origin}/api/projects/?user_id=${userId}`, {
            method: "GET"
        })
            .then(
                (response) => {
                    if (response.ok) {
                        console.log(response);
                        return response;
                    }
                    else {
                        alert("Could not retrieve projects for user.");
                    }
                }
            )
    }

    const [projectsJson, setProjectsJson] = React.useState(getProjects);

    return (
        <div className="bg" style={{
            width: '100vw',
            height: '100vh',
        }}>
            <Container>
                <h1>
                    Projects:
                </h1>
            </Container>
            <ProjectsList projects={projectsJson} />
            <Container hidden={userId !== undefined}>
                <Card>
                    <CardBody>
                        Please log in to see your saved projects.
                    </CardBody>
                </Card>
            </Container>
        </div>
    );
}

export default ProjectsPage;