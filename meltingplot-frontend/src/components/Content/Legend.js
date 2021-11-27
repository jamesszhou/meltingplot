import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
// reactstrap components
import {
    Input,
    InputGroup,
    InputGroupText,
    Container
  } from "reactstrap";

function Legend(props) {
    return (
        <Container>
            <InputGroup>
                <InputGroupText>
                    Legend Desired?
                </InputGroupText>
                <Input  type="checkbox"
                        addon
                        defaultValue = {props.legend}
                        onChange={(e) => props.setLegend(e.target.checked)}
                />
            </InputGroup>
            <br />
        </Container>
    );
}

export default Legend;