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

    const [xLabel, setXLabel] = React.useState(false);
    const [yLabel, setYLabel] = React.useState(false);

    const updateXLabel = () => {
        props.setXLabel(xLabel);
    }

    const updateYLabel = () => {
        props.setYLabel(yLabel);
    }

    return (
        <Container>
            <InputGroup>
                <Input  onInput={e => setXLabel(e.target.value)}
                        placeholder="input name of X axis here"/>
                <Button onClick={updateXLabel}>
                    Enter
                </Button>
            </InputGroup>
            <br />
            <InputGroup>
                <Input  onInput={e => setYLabel(e.target.value)}
                        placeholder="input name of Y axis here"/>
                <Button onClick={updateYLabel}>
                    Enter
                </Button>
            </InputGroup>
            <br />
        </Container>
    );
}

export default AxesLabels;