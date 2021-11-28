import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button,
    Input,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
} from "reactstrap";
import {useHistory} from "react-router-dom";

function CreateAccount(props) {
    const validRegex = new RegExp('^[a-zA-Z0-9]*$');
    const history = useHistory();
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [check, setCheck] = React.useState("");

    const [usernameError, setUsernameError] = React.useState("");
    const [passwordError, setPasswordError] = React.useState("");

    const addUser = (username, password) => {
        fetch(`${window.location.origin}/api/user/?username=${username}&password=${password}`, {
            method: "POST"
        })
        .then((response) => response.json().then((data) => ({status: response.status, body: data})))
        .then( (obj) => {
            if (obj.status === 201){
                history.push(`/project-page/?user_id=${obj.body.user_id}`);
            }
            else{
                setPasswordError(obj.body.error);
            }
        }
        ).catch(
            (error) =>{
                setPasswordError("User creation Failed, please try again");
            }
            
        )
    }

    const validateUsername = () => {
        if (username.length < 8) {
            setUsernameError("Username must be at least 8 characters.");
        } else if (!validRegex.test(username)) {
            setUsernameError("Username may only contain A-Z and/or 0-9.");
        } else {
            setUsernameError("");
            props.toggleUsernameModal();
            props.togglePasswordModal();
        }
    }

    const validatePassword = () => {
        if (password.length < 8) {
            setPasswordError("Password must be at least 8 characters.");
        } else if (!validRegex.test(password)) {
            setPasswordError("Password may only contain A-Z and/or 0-9.");
        } else {
            setPasswordError("");
            props.togglePasswordModal();
            props.toggleCheckModal();
        }
    }

    const verifyPassword = () => {
        if (password === check) {
            setCheck("");
            setPasswordError("");
            
            // Add user to database
            addUser(username, password);
            props.toggleCheckModal();
        } else {
            setCheck("");
            setPasswordError("Passwords did not match.");
            props.toggleCheckModal();
            props.togglePasswordModal();
        }
    }

    const cancelCreateUsername = () => {
        setUsernameError("");
        props.toggleUsernameModal();
    }

    const cancelCreatePassword = () => {
        setPasswordError("");
        props.togglePasswordModal();
    }

    const cancelCheckPassword = () => {
        setPasswordError("");
        props.toggleCheckModal();
    }

    return (
        <>
            <Modal isOpen={props.usernameModal} toggle={props.toggleUsernameModal}>
                <ModalHeader>
                    Create New Account
                </ModalHeader>
                <ModalBody>
                    Please enter a username.
                    <Input 
                        onInput={e => setUsername(e.target.value)} 
                        placeholder='New Username'
                    />
                    {usernameError}
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        onClick={validateUsername}
                    >
                        Submit
                    </Button>
                    <Button onClick={cancelCreateUsername}>
                        Cancel
                    </Button>
               </ModalFooter>
            </Modal>

            <Modal isOpen={props.passwordModal} toggle={props.togglePasswordModal}>
                <ModalHeader>
                    Create New Account
                </ModalHeader>
                <ModalBody>
                    Please create a new password.
                    <Input 
                        onInput={e => setPassword(e.target.value)} 
                        placeholder='New Password'
                        type='password'
                    />
                    {passwordError}
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        onClick={validatePassword}
                    >
                        Submit
                    </Button>
                    <Button onClick={cancelCreatePassword}>
                        Cancel
                    </Button>
               </ModalFooter>
            </Modal>

            <Modal isOpen={props.checkModal} toggle={props.toggleCheckModal}>
                <ModalHeader>
                    Create New Account
                </ModalHeader>
                <ModalBody>
                    Please re-enter your password.
                    <Input 
                        onInput={e => setCheck(e.target.value)} 
                        placeholder='Re-enter Your Password'
                        type='password'
                    />
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        onClick={verifyPassword}
                    >
                        Submit
                    </Button>
                    <Button onClick={cancelCheckPassword}>
                        Cancel
                    </Button>
               </ModalFooter>
            </Modal>
        </>
    );
}

export default CreateAccount;