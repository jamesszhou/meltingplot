import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Button,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Nav,
  NavbarBrand,
  Navbar,
  NavItem,
} from "reactstrap";


function ProjectPageHeader(props) {
  
  const [titleModal, setTitleModal] = React.useState(false);
  const [titleInput, setTitleInput] = React.useState(props.title);

  const toggleTitleModal = () => {
    setTitleInput(props.title);
    setTitleModal(!titleModal);
  };

  const updateTitle = () => {
    setTitleModal(false);
    props.setTitle(titleInput);
  };

  return (
    <>
        <Navbar>
          <Container>
            <Nav>
                <NavbarBrand data-placement="bottom" title="Title">
                    { props.title }
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
                    <Button color="primary">
                        + Upload CSV
                    </Button>
                </NavItem>
            </Nav>
            <Modal isOpen={titleModal} toggle={toggleTitleModal}>
                <ModalHeader>
                    Edit Project Title
                </ModalHeader>
                <ModalBody>
                    <Input
                        value={titleInput} 
                        onInput={e => setTitleInput(e.target.value)} />
                </ModalBody>
                <ModalFooter>
                <Button
                    color="primary"
                    onClick={updateTitle}
                >
                    Update
                </Button>
                <Button onClick={toggleTitleModal}>
                    Cancel
                </Button>
                </ModalFooter>
            </Modal>
          </Container>
        </Navbar>
        <Navbar>
            <Container>
                <div className="w-100">
                    <Form>
                        <FormGroup>
                            <Label>
                                Description
                            </Label>
                            <Input 
                                type="textarea" 
                                value={props.description}
                                onInput={e => props.setDescription(e.target.value)} />
                        </FormGroup> 
                    </Form>
                </div>
            </Container>
        </Navbar>  
    </>
  );
}

export default ProjectPageHeader;
