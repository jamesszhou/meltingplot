import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/pythondisplay.css'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// reactstrap components
import { generateCode } from "../../util/GeneratePython";

function PythonDisplay(props) {
    return (
            <div className="display-linebreak">
                <SyntaxHighlighter language="python" style={docco}>
                    {generateCode(props.config)}
                </SyntaxHighlighter>
            </div>
    );
}

export default PythonDisplay;