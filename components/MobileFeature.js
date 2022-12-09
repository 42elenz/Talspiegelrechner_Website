import React from 'react';
import {useRouter} from "next/router";
import { Container, Row, Col } from "reactstrap";

const FeatureBox = (props) => {
	const { features } = props;
	return (
	  <>
		{features.map((feature) => (
		  <Row key={feature.id}>
			<Col xs={12}>
			  <div>
				<img src={feature.img} alt="" className="img-fluid d-block mx-auto" width='350px' />
			  </div>
			  <h3 className="text-center font-weight-normal text-dark mt-2 mb-2">
				{feature.title}
			  </h3>
			  <p className="text-center text-muted">{feature.desc}</p>
			</Col>
		  </Row>
		))}
	  </>
	);
  };

const Feature = () => {
const features = [
    {id : 1, img : "/assets/Medikamentwahl.png", title : "Auswahl des Medikaments", desc : "Wählen Sie ein Medikament aus dem Drop-Down Menu, oder geben Sie die Werte einfach selber ein"},
    {id : 2, img : "/assets/Hwz.png", title : "Halbwertszeit", desc : "Wählen Sie Halbwertszeit in Stunden aus oder nutzen Sie automatische Befüllung"},
    {id : 3, img : "/assets/Verabreichungsintro.png", title : "Verabreichung", desc : "In welchen Abständen verabreichen Sie die Medikation?"},
	{id : 4, img : "/assets/Konzentration.png", title : "Gemessene Konzentration", desc : "Wie hoch war die Konzentration im Blut ('Spiegel') zum Zeitpunkt der Messung?"},
	{id : 5, img : "/assets/Zeiten.png", title : "Eintragen der Daten", desc : "Tragen Sie die Zeiten ein. Achten Sie darauf, dass die Chronologie gewahrt bleibt!"}
  ];
return (
    <section className="section" id="mobilefeature">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text"><span className="text-warning">Funktionsweise</span></h3>
            </div>
          </Col>
        </Row>
        <FeatureBox features={features} />
      </Container>
    </section>
  );
}
export default Feature;