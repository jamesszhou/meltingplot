import React from "react";
import ProjectPageHeader from "../Headers/ProjectPageHeader.js";
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

function IndexNavbar() {
    const [isOpen, setIsOpen] = React.useState(false);

    const [graphType, setGraphType] = React.useState("None selected");
    
    const [title, setTitle] = React.useState('Project title');
    
    const [description, setDescription] = React.useState('');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const updateGraphType = (action) => {
        setGraphType(action);
    }

    return (
        <>
            <ProjectPageHeader title={title} 
                            setTitle={setTitle} 
                            description={description} 
                            setDescription={setDescription} 
            />
            <div>
                <br />
                <script type= "text/javascript">
                    setGraphType("None selected");
                </script>
                <Container>
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
                </Container>
            </div>
            <div>
                <Container>
                    <InputGroupText> X Label </InputGroupText>
                    <Input placeholder="input data here" />
                    <br />
                    <InputGroupText> Y Label </InputGroupText>
                    <Input placeholder="input data here" />
                </Container>
            </div>
        </>
    );
}

export default IndexNavbar;