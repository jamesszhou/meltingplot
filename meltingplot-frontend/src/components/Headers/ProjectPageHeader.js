import React from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";
import 'bootstrap/dist/css/bootstrap.min.css';

// reactstrap components
import {
  Button,
  Container,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
} from "reactstrap";
//import { console } from "console";

function IndexNavbar() {
  const [projectTitle, setProjectTitle] = React.useState("Title of Project Bitch");
  const [titleModal, setTitleModal] = React.useState(false);
  const [titleInput, setTitleInput] = React.useState('');

  const toggleTitleModal = () => {
    setTitleModal(!titleModal);
  };

  const updateTitle = () => {
    setTitleModal(false);
    setProjectTitle(titleInput);
    setTitleInput('');
  };

  return (
    <Navbar>
      <Container>
        <NavbarBrand data-placement="bottom" title="Title">
            { projectTitle }
        </NavbarBrand>
        <Button onClick={toggleTitleModal}>
            Save Project
        </Button>
        <Button color="primary">
            + Upload CSV
        </Button>
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
  );
}

export default IndexNavbar;
