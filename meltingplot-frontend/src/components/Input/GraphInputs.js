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

    const [lastClicked, setLastClicked] = React.useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const updateLastClicked = (action) => {
        setLastClicked(action);
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
        <Dropdown toggle={toggleDropdown} isOpen={isOpen}>
        <DropdownToggle caret>
            Currently Selected: {lastClicked}
        </DropdownToggle>
        <DropdownMenu container="body">
            <DropdownItem onClick={() => updateLastClicked(2)}>
                Bar Graph
            </DropdownItem>
            <DropdownItem onClick={() => updateLastClicked(1)}>
                Scatterplot
            </DropdownItem>
            <DropdownItem onClick={() => updateLastClicked(3)}>
                Boxplot
            </DropdownItem>
            <DropdownItem onClick={() => updateLastClicked(3)}>
                Histogram
            </DropdownItem>
        </DropdownMenu>
        </Dropdown>
        </div>
        <div>
            <InputGroupText> Line X Data </InputGroupText>
            <Input placeholder="input data here" />
            <br />
            <InputGroupText> Line Y Data </InputGroupText>
            <Input placeholder="input data here" />
        </div>
        </>
    );
}

export default IndexNavbar;