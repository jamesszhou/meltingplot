import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

// reactstrap components
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  InputGroupText
} from "reactstrap";

function IndexNavbar() {
    const [isOpen, setIsOpen] = React.useState(false);

    const [graphType, setGraphType] = React.useState("None selected");

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const updateGraphType = (action) => {
        setGraphType(action);
    }

    return (
        <>
        <div
            style={{
                padding: '8px',
                width: 300
            }}
        >
        <br />
        <script type= "text/javascript">
            setGraphType("None selected");
        </script>
        <Dropdown toggle={toggleDropdown} isOpen={isOpen}>
        <DropdownToggle caret>
            Graph Type: {graphType}
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
        </div>
        <div>
            <InputGroupText> X Label </InputGroupText>
            <Input placeholder="input data here" />
            <br />
            <InputGroupText> Y Label </InputGroupText>
            <Input placeholder="input data here" />
        </div>
        </>
    );
}

export default IndexNavbar;