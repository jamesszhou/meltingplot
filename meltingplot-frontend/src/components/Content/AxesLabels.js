import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
// reactstrap components
import {
    Input,
    InputGroup,
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
                <Input  
                        value = {props.xLabel}
                        placeholder="input name of X axis here"
                        onInput={e => updateXLabel(e.target.value)}/>
            </InputGroup>
            <br />
            <div>
                Y-axis Label:
            </div>
            <InputGroup>
                <Input  
                        value = {props.yLabel}
                        placeholder="input name of Y axis here"
                        onInput={e => updateYLabel(e.target.value)}/>
            </InputGroup>
            <br />
        </Container>
    );
}

export default AxesLabels;