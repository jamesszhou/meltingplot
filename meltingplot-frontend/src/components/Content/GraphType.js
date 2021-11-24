import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
// reactstrap components
import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Container
  } from "reactstrap";

function GraphType(props) {
  
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const updateGraphType = (action) => {
        props.setGraphType({"target": {"name": "GraphType", "value": action}});
    }

    return (
        <>
            <div>
                <script type= "text/javascript">
                    props.setGraphType("None selected");
                </script>
                <Container>
                    <Dropdown toggle={toggleDropdown} isOpen={isOpen}>
                        <DropdownToggle caret>
                            Graph/Line Type: {props.graphType}
                        </DropdownToggle>
                        <DropdownMenu container="body">
                            <DropdownItem onClick={() => updateGraphType("Bar")}>
                                Bar Graph
                            </DropdownItem>
                            <DropdownItem onClick={() => updateGraphType("Line")}>
                                Line Graph
                            </DropdownItem>
                            <DropdownItem onClick={() => updateGraphType("Scatter")}>
                                Scatterplot
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </Container>
            </div>
            <br/>
        </>
    );
}

export default GraphType;