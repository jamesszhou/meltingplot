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

function GraphColor(props) {
  
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const updateGraphColor = (action) => {
        props.setGraphColor({"target": {"name": "Color", "value": action}});
    }

    return (
        <>
            <div>
                <script type= "text/javascript">
                    props.setGraphColor("None selected");
                </script>
                <Container>
                    <Dropdown toggle={toggleDropdown} isOpen={isOpen}>
                        <DropdownToggle caret>
                            Graph Color: {props.graphColor}
                        </DropdownToggle>
                        <DropdownMenu container="body">
                            <DropdownItem onClick={() => updateGraphColor("Red")}>
                                Red
                            </DropdownItem>
                            <DropdownItem onClick={() => updateGraphColor("Green")}>
                                Green
                            </DropdownItem>
                            <DropdownItem onClick={() => updateGraphColor("Blue")}>
                                Blue
                            </DropdownItem>
                            <DropdownItem onClick={() => updateGraphColor("Yellow")}>
                                Yellow
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </Container>
            </div>
            <br/>
        </>
    );
}

export default GraphColor;