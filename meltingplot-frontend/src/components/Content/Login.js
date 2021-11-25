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

function Login(props) {

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const [loginError, setLoginError] = React.useState("");

    const login = () => {
        // Make login request
        props.toggleLoginModal();
    }

    const cancelLogin = () => {
        setLoginError("");
        props.toggleLoginModal();
    }

    return (
        <>
            <Modal isOpen={props.loginModal} toggle={props.toggleLoginModal}>
                <ModalHeader>
                    Login to Your Account
                </ModalHeader>
                <ModalBody>
                    <Input 
                        onInput={e => setUsername(e.target.value)} 
                        placeholder='Username'
                    />
                    <Input 
                        onInput={e => setPassword(e.target.value)} 
                        placeholder='Password'
                    />
                    {loginError}
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        onClick={login}
                    >
                        Login
                    </Button>
                    <Button onClick={cancelLogin}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default Login;