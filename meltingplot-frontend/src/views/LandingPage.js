import React from "react";

// core components
import IndexNavbar from "../components/Navbars/IndexNavbar.js";
import ProjectPageHeader from "../components/Headers/ProjectPageHeader.js";
import PageFooter from "../components/Footers/PageFooter.js";

function LandingPage() {

  const [title, setTitle] = React.useState('Project title');
  const [description, setDescription] = React.useState('');

  return (
    <>
      <IndexNavbar />
      <ProjectPageHeader  title={title} 
                          setTitle={setTitle} 
                          description={description} 
                          setDescription={setDescription} />
          <img src={"http://localhost:5000/api/graph/?code=yolo" } alt=""/>
      <PageFooter />
    </>
  );
}

export default LandingPage;
