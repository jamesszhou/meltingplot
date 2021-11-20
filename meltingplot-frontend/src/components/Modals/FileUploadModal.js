import React, { createRef } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
} from "reactstrap";

function FileUploadModal(props) {

    const fileInput = createRef();
    const [valid, setValid] = React.useState(false);

    const handleChange = (e) => {
        const filename = e.target.files[0].name;
        const extension = filename.substring(filename.lastIndexOf('.'));
        if (extension === '.csv') {
            setValid(true);
        } else {
            setValid(false);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData();
        formData.append("file", e.target.elements.fileInput.files[0]);

        fetch(`${window.location.origin}/api/project`, formData, {
            method: "POST",
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
        .then(
            (response) => {
                props.toggleFileModal();
                console.log(response);
            },      
            (error) => {
                alert(error);
            }
        )
    }

    return (
        <Modal isOpen={props.fileModal} toggle={props.toggleFileModal}>
            <ModalHeader>
                Upload CSV Data
            </ModalHeader>
            <ModalBody>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Input
                            ref={fileInput}
                            name="fileInput"
                            type="file"
                            accept=".csv"
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <Button type="submit" color="primary" disabled={!valid}>
                        Upload
                    </Button>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button onClick={props.toggleFileModal}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
}

export default FileUploadModal;