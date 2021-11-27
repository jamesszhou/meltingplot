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

function Login(props) {
    const history = useHistory();

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const [loginError, setLoginError] = React.useState("");

    const login = () => {
       
        // Make login request
        fetch(`${window.location.origin}/api/user?username=${username}&password=${password}`, {
            method: "GET"
        })
        .then((response) => response.json().then((data) => ({status: response.status, body: data})))
        .then( (obj) => {
            if (obj.status === 200){
                history.push(`/project-page/?user_id=${obj.body.user_id}`);
                props.toggleLoginModal();
            }
            else{
                setLoginError(obj.body.error)
            }
        }
        ).catch(
            (error) =>{
                console.log(error);
                setLoginError("Login Failed, please try again");
            }
            
        )
        
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