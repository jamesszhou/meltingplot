import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function PageFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()} MeltingPlot
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default PageFooter;
