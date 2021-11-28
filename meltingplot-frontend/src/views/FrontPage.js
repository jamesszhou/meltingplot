import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from '../components/Content/Login.js';
import CreateAccount from "../components/Content/CreateAccount.js";

import {
    Button,
    Container,
    Row,
    Col
} from "reactstrap";
import {Link} from 'react-router-dom';

import banner from '../assets/img/clipart1664601.png';
import '../css/FrontPage.css';

/* First page a user reaches, allows sign in */
function FrontPage() {

    // document.documentElement.classList.remove("nav-open");
    // React.useEffect(() => {
    //     document.body.classList.add("profile-page");
    //     return function cleanup() {
    //         document.body.classList.remove("profile-page");
    //     };
    // });

    const [loginModal, setLoginModal] = React.useState(false);
    const [usernameModal, setUsernameModal] = React.useState(false);
    const [passwordModal, setPasswordModal] = React.useState(false);
    const [checkModal, setCheckModal] = React.useState(false);

    const toggleLoginModal = () => {
        setLoginModal(!loginModal);
    };

    const toggleUsernameModal = () => {
        setUsernameModal(!usernameModal);
    };

    const togglePasswordModal = () => {
        setPasswordModal(!passwordModal);
    };

    const toggleCheckModal = () => {
        setCheckModal(!checkModal);
    }

    return (
        <div className="bg" style={{
            width: '100vw',
            height: '100vh',
        }}>
            <div style={{ 
                backgroundImage: `url(${banner})`,
                backgroundPosition: 'center',
                backgroundSize: 'contain',
                backgroundRepeat: 'repeat',
                width: '100vw',
                height: '10vh',
            }}>
            </div>
            <br/>
            <h1>Welcome</h1>
            <h2>to</h2>
            <article>
                <h1>Melting Plot</h1>
                <p>CS 130 Fall '21</p>
            </article>
            <Container>
                <Row className="main-container">
                    <Col></Col>
                    <Col className="class-col">
                        <Button onClick={toggleLoginModal}> Login </Button>
                    </Col>
                    <Col><Button onClick={toggleUsernameModal}> Create Account </Button>
                    </Col>
                    <Col><Button > <Link to="/interactive-page">Try Now </Link></Button>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
            <Login
                loginModal={loginModal}
                toggleLoginModal={toggleLoginModal}
            />
            <CreateAccount
                usernameModal={usernameModal}
                passwordModal={passwordModal}
                checkModal={checkModal}
                toggleUsernameModal={toggleUsernameModal}
                togglePasswordModal={togglePasswordModal}
                toggleCheckModal={toggleCheckModal}
            />
        </div>
    );
}

export default FrontPage;