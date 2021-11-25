import React from "react";

// reactstrap components
import { UncontrolledTooltip, Container } from "reactstrap";

// core components

function FrontPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(" + require("../../assets/img/Samueli.jpeg") + ")",
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1>James Zhou</h1>
            <h3>Computer Science Student at UCLA</h3>
            <br />

            <a
              href="https://github.com/jamesszhou"
              class="p-3"
              style={{ color: "#D3D3D3" }}
              id="Github"
              target="_blank"
            >
              <i class="fa fa-github fa-2x"></i>
            </a>
            <UncontrolledTooltip placement="bottom" target="Github">
              Github
            </UncontrolledTooltip>
            <a
              href="https://www.linkedin.com/in/jamesszhou/"
              class="p-3"
              style={{ color: "#D3D3D3" }}
              id="LinkedIn"
              target="_blank"
            >
              <i class="fa fa-linkedin fa-2x"></i>
            </a>
            <UncontrolledTooltip placement="bottom" target="LinkedIn">
              LinkedIn
            </UncontrolledTooltip>
          </div>
        </Container>
      </div>
    </>
  );
}

export default FrontPageHeader;