import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    Button,
    Card,
    CardBody,
    Container,
    Nav,
    NavbarBrand,
    Navbar
} from "reactstrap";
import { Link } from "react-router-dom";

const projectRoute = "/interactive-page/?project_id=";
const userParam = "&user_id="

function ProjectsList(props) {

    const parseProjects = () => {
        console.log(props.projects);
        let list = [];
        if (props.projects === undefined){
            return [];
        }
        else if (props.projects.length === 0) {
            return list;
        }

        props.projects.forEach((project, index) => {
            list.push(
                <Container key={index}>
                    <Navbar>
                        <Nav>
                            <NavbarBrand
                                data-placement="bottom"
                                title="Title">
                                <Link to={projectRoute + project.project_id + userParam + project.user_id}>
                                {project.title}
                                </Link>
                            </NavbarBrand>
                        </Nav>
                        <Button onClick={() => props.deleteProject(project.project_id, index)}>
                            Delete
                        </Button>
                    </Navbar>
                    <Card>
                        <CardBody>
                            {project.description}
                        </CardBody>
                    </Card>
                </Container>
            );
        })

        return list;
    }

    return (
        <>
            {props.projects === undefined || props.projects.length === 0 ? <Container> <Card><CardBody>No Projects Found</CardBody> </Card> </Container>: <ul>{parseProjects()}</ul>}
        </>
    );
}

export default ProjectsList;