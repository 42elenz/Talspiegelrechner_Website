import React from 'react';
import { Container, Row, Col } from "reactstrap";
const Footer = () => {
  return (
    <section className="footer section">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="text-center text-muted">
              <h6 className="mb-0"><br />Dr.med.Esra Lenz</h6>
              <p className="mb-0 f-15">talspiegelrechner@yahoo.com</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className="text-center text-muted">
              <p>&nbsp;</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Footer;
