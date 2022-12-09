import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Hero = () => {
  return (
    <section className="section position-relative" style={{ height: '100vh' }}>
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <p className="text-uppercase text-primary font-weight-medium f-14 mb-4">Talspiegelrechner</p>
              <h1 className="mb-4 font-weight-normal line-height-1_4">Ermittle den Talspiegel rechnerisch!</h1>
              <p className="text-muted mb-4 pb-2">Haben Sie auch das Problem, dass Sie es nicht immer schaffen den Spiegelkontrolle kurz vor der Medikamentegabe zu bestimmen? Mit dem Talspiegelrechner können Sie einfach den Talspiegel ausrechnen. <br /> <br />
              <a href="#" className="btn btn-warning btn-lg">
                Lass mich losrechnen <span className="ml-5 right-icon">&#8594;</span>
              </a>
              <br /> <br />
              <a href="#">
				  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" width="100" height="30" /></a>
				  <a href="#">
				  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="App Store" width="100" height="30" /></a>
			  <br /> <br /> 
			  Für mehr Informationen <u><a href="#feature">lesen Sie weiter</a></u>! 
			</p>
			
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <img src="/assets/logo.png" alt="" className="img-fluid mx-auto d-block"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
