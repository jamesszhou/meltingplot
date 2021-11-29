import React from "react";

import {
    Button,
    Input,
    InputGroup,
    InputGroupText,
    Container
} from "reactstrap";


function Legend(props) {

    const toggleLegend = () => {
        props.setLegend(!props.legend);
    }

    const command = () => {
        if (props.legend) {
            return "Remove";
        } else {
            return "Include";
        }
    }


    return (
        <Container>
            <InputGroup>
                <Button color="dark"
                    outline={!props.legend}
                    onClick={toggleLegend} >
                    {command()} Legend
                </Button>
            </InputGroup>
            <br />
        </Container>
    );
}

export default Legend;