import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import IndexNavbar from "../components/Navbars/IndexNavbar.js";
import FrontPageHeader from "../components/Headers/FrontPageHeader.js";
import Login from '../components/Content/Login.js';
import CreateAccount from "../components/Content/CreateAccount.js";
import {
    Button
} from "reactstrap";
import background from '../assets/img/Samueli.jpeg';

/* First page a user reaches, allows sign in */
function FrontPage() {

    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
        document.body.classList.add("profile-page");
        return function cleanup() {
            document.body.classList.remove("profile-page");
        };
    });

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
        <>
            <IndexNavbar />

            <FrontPageHeader />
        
        <div style={{ 
            backgroundImage: `url(${background})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh'
        }}>
            <Button  
                onClick={toggleLoginModal}
            >
                Login
            </Button>
            <Button
                onClick={toggleUsernameModal}
            >
                Create Account
            </Button>
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
        </>
    );
}

export default FrontPage;