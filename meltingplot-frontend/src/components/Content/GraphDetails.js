import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
// reactstrap components
import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Input,
    InputGroupText,
    Container
  } from "reactstrap";

function GraphDetails(props) {
  
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const updateGraphType = (action) => {
        props.setGraphType(action);
    }

    return (
        <>
            <div>
            <br />
                <script type= "text/javascript">
                    props.setGraphType("None selected");
                </script>
                <Container>
                    <Dropdown toggle={toggleDropdown} isOpen={isOpen}>
                        <DropdownToggle caret>
                            Graph Type: {props.graphType}
                        </DropdownToggle>
                        <DropdownMenu container="body">
                            <DropdownItem onClick={() => updateGraphType("Bar Graph")}>
                                Bar Graph
                            </DropdownItem>
                            <DropdownItem onClick={() => updateGraphType("Line Graph")}>
                                Line Graph
                            </DropdownItem>
                            <DropdownItem onClick={() => updateGraphType("Scatterplot")}>
                                Scatterplot
                            </DropdownItem>
                            <DropdownItem onClick={() => updateGraphType("Boxplot")}>
                                Boxplot
                            </DropdownItem>
                            <DropdownItem onClick={() => updateGraphType("Histogram")}>
                                Histogram
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </Container>
            </div>
            <div>
                <Container>
                    <InputGroupText> X Label </InputGroupText>
                    <Input placeholder="input name of X axis here" />
                    <br />
                    <InputGroupText> Y Label </InputGroupText>
                    <Input placeholder="input name of Y axis here" />
                </Container>
            </div>
        </>
    );
}

export default GraphDetails;