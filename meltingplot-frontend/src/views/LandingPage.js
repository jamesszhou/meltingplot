import React from "react";

// core components
import IndexNavbar from "../components/Navbars/IndexNavbar.js";
import LandingPageHeader from "../components/Headers/LandingPageHeader.js";

function LandingPage() {

  return (
    <>
      <IndexNavbar />
      <LandingPageHeader />
          <img src={"http://localhost:5000/api/graph/?code=yolo" }/>

    </>
  );
}

export default LandingPage;
