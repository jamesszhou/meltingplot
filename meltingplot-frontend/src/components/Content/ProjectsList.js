import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    Card,
    CardBody,
    Container,
    Nav,
    NavbarBrand,
    Navbar
} from "reactstrap";

const projectRoute = "/index/?project_id=";
const userParam = "&user_id="

function ProjectsList(props) {

    const parseProjects = () => {
        let list = [];

        if (props.projects.length === 0) {
            return list;
        }

        JSON.parse(props.projects).forEach(project => {
            list.push(
                <Container>
                    <Navbar>
                        <Nav>
                            <NavbarBrand href={projectRoute + project.project_id + userParam + project.user_id}
                                data-placement="bottom"
                                title="Title">
                                {project.title}
                            </NavbarBrand>
                        </Nav>
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

    const projectsList = React.useState(parseProjects);

    return (
        <>
            <ul>{projectsList}</ul>
        </>
    );
}

export default ProjectsList;