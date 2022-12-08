import React from 'react';
import { Container, Row, Col } from "reactstrap";
const Service = () => {
  return (
    <section className="section" id="service">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <h3 className="text-center font-weight-normal text-dark">
              <span className="text-warning">Die Formel</span>
            </h3>
            <p className="text-center text-muted mt-4 mb-4">
              Die Formel zur Berechnung des Talspiegels
            </p>
            <img
              src="/assets/gleichung.png"
              alt="Gleichung"
              className="mx-auto d-block img-fluid"
            />
			<p className="text-center text-muted mt-4 mb-4">
			Cmin = Talspiegel, Ct = Konzentration bei Blutentnahme, e = Eulerische-Zahl, ke = ln2/Halbwertszeit, tmin = Zeit des minimalen Talspiegels, t = Abnahmezeitpunkt von Ct
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Service;
