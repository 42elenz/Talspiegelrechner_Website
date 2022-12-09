import React from 'react';
import { Container, Row, Col } from "reactstrap";
const About = () => {
return (
    <section className="section bg-light" id="Datenschutz">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="text-warning"><br />Datenschutz</h3>
              <p className="text-muted">Es werden keine Daten in der App gespeichert. Es gibt keine Verbindung zu einem permanenten Speicher. Die App funktioniert ohne Login und ohne Nutzerdaten. <u><a href="https://github.com/42elenz/talspiegelrechner/blob/main/Privacy_Policy.md">(Datenschutz-Policy)</a></u></p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default About;