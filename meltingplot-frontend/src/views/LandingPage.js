import React from "react";

// core components
import ProjectSpecs from "../components/Content/ProjectSpecs.js";
import PageFooter from "../components/Footers/PageFooter.js";
import GraphComponent from "../components/Content/GraphComponent.js";

function LandingPage() {
  return (
    <>
      <ProjectSpecs/>
      <GraphComponent/>
      <PageFooter/>
    </>
  );
}

export default LandingPage;