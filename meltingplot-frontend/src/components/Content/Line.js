import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
// reactstrap components
import GraphColor from "./GraphColor";

import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Container,
    Button
  } from "reactstrap";

function Line(props) {


    return (
        <>
            <div>
                <Button >
                    Remove
                </Button>
                <GraphColor/>
            </div>
            <br/>
        </>
    );
}

export default Line;