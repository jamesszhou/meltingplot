import React from "react";

import TitleEditModal from "../Modals/TitleEditModal.js";

import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button,
    Container,
    Form,
    FormFeedback,
    FormGroup,
    Input,
    Label,
    Nav,
    NavbarBrand,
    Navbar,
    NavItem,
} from "reactstrap";
import FileUploadModal from "../Modals/FileUploadModal.js";

function ProjectPageHeader(props) {

    const [titleModal, setTitleModal] = React.useState(false);
    const [fileModal, setFileModal] = React.useState(false);

    const toggleTitleModal = () => {
        setTitleModal(!titleModal);
    };

    const toggleFileModal = () => {
        setFileModal(!fileModal);
    }

    return (
        <>
            <Navbar>
                <Container>
                    <Nav>
                        <NavbarBrand data-placement="bottom" title="Title">
                            {props.title}
                        </NavbarBrand>
                        <Button color="light" onClick={toggleTitleModal}>
                            Edit Title
                        </Button>
                    </Nav>
                    <Nav>
                        <NavItem>
                            <Button>
                                Save Project
                            </Button>
                        </NavItem>
                        <NavItem>
                            <Button color="primary" onClick={toggleFileModal}>
                                + Upload CSV
                            </Button>
                        </NavItem>
                    </Nav>
                    <TitleEditModal title={props.title}
                        setTitle={props.setTitle}
                        titleModal={titleModal}
                        toggleTitleModal={toggleTitleModal} />
                    <FileUploadModal fileModal={fileModal}
                        toggleFileModal={toggleFileModal} />
                </Container>
            </Navbar>
            <Navbar>
                <Container>
                    <div className="w-50">
                        <Form>
                            <FormGroup>
                                <Label>
                                    Description ({Math.max(0, 120 - props.description.length)} characters left)
                                </Label>
                                <Input
                                    type="textarea"
                                    invalid={props.description.length > 120}
                                    onInput={e => props.setDescription(e.target.value)} />
                                <FormFeedback hidden={props.description.length <= 120}>
                                    Too many characters.
                                </FormFeedback>
                            </FormGroup>
                        </Form>
                    </div>
                </Container>
            </Navbar>
        </>
    );
}

export default ProjectPageHeader;