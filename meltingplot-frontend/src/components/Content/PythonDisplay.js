import React from "react";
import { Container } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/pythondisplay.css'
// reactstrap components
import { generateCode } from "../../util/GeneratePython";

function PythonDisplay(props) {
    return (
            <div className="display-linebreak">
                {generateCode(props.config)}
            </div>
    );
}

export default PythonDisplay;