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
    const [ddColor, setddColor] = React.useState("");

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const updateDropDownColor = (color) => {
        switch (color) {
            case "Red":
                setddColor("danger");
                break;

            case "Green":
                setddColor("success");
                break;
            
            case "Blue":
                setddColor("primary");
                break;

            case "Yellow":
                setddColor("warning");
                break;

            default: 
                setddColor("");
                break;
        }

    }

    const updateGraphColor = (action) => {
        updateDropDownColor(action);
        props.setGraphColor({ "target": { "name": "Color", "value": action } });
    }

    return (
        <>
            <div>
                <script type="text/javascript">
                    props.setGraphColor("None selected");
                </script>
                <Container>
                    <Dropdown toggle={toggleDropdown} isOpen={isOpen}>
                        <DropdownToggle color={ddColor} caret>
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
            <br />
        </>
    );
}

export default GraphColor;