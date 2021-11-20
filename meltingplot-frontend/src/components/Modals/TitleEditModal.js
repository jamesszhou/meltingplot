import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button,
    Input,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
} from "reactstrap";

function TitleEditModal(props) {

    const [titleInput, setTitleInput] = React.useState(props.title);

    const updateTitle = () => {
        props.toggleTitleModal();
        props.setTitle(titleInput);
    };

    return (
        <>
            <Modal isOpen={props.titleModal} toggle={props.toggleTitleModal}>
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
                    <Button onClick={props.toggleTitleModal}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default TitleEditModal;