import React from 'react';
import { Container, Row, Col } from "reactstrap";
const About = () => {
return (
    <section className="section bg-light" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="text-warning"><br />Kontakt</h3>
              <p className="text-muted">Bei Fragen, wenden Sie sich gerne an den Entwickler</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default About;