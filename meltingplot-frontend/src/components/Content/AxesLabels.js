import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
// reactstrap components
import {
    Input,
    InputGroup,
    Button,
    Container
  } from "reactstrap";

function AxesLabels(props) {

    const updateXLabel = (val) => {
        props.setXLabel(val);
    }

    const updateYLabel = (val) => {
        props.setYLabel(val);
    }

    return (
        <Container>
            <div>
                X-axis Label:
            </div>
            <InputGroup>
                
                <Input  onInput={e => updateXLabel(e.target.value)}
                        placeholder="input name of X axis here"/>
            </InputGroup>
            <br />
            <div>
                Y-axis Label:
            </div>
            <InputGroup>
                <Input  onInput={e => updateYLabel(e.target.value)}
                        placeholder="input name of Y axis here"/>
            </InputGroup>
            <br />
        </Container>
    );
}

export default AxesLabels;