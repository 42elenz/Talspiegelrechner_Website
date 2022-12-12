import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {useRouter} from "next/router";
import {isMobile} from 'react-device-detect';

const Hero = () => {
	const router = useRouter();
	const width = router.query.width;
  return (
    <section className="section position-relative" style={{ height: '100vh' }}>
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <p className="text-uppercase text-primary font-weight-medium f-14 mb-4">Talspiegelrechner</p>
              <h1 className="mb-4 font-weight-normal line-height-1_4">Ermittle den Talspiegel rechnerisch!</h1>
              <p className="text-muted mb-4 pb-2">Haben Sie auch das Problem, dass Sie es nicht immer schaffen den Spiegelkontrolle kurz vor der Medikamentengabe zu bestimmen? Mit dem Talspiegelrechner können Sie einfach den Talspiegel ausrechnen.
			  <br/><u>HINWEIS!</u> Trackpad oder das Mausrad verwenden für die Zeiteinstellung, sollten Sie kein Smartphone benutzen! <br /> <br />
              <a href="https://talspiegel-calculator.vercel.app/#/" className="btn btn-warning btn-lg">
                Lass mich losrechnen <span className="ml-5 right-icon">&#8594;</span>
              </a>
              <br /> <br />
              <a href="#">
				  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" width="100" height="30" /></a>
				  <a href="#https://play.google.com/store/apps/details?id=de.talspiegelrechner.talspiegelrechner&gl=DE">
				  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="App Store" width="100" height="30" /></a>
			  <br /> <br /> 
			  Für mehr Informationen <u><a href="#funktionsweise">lesen Sie weiter</a></u>! 
			</p>
            </div>
          </Col>
		  {!isMobile &&
          (<Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <img src="/assets/logo.png" alt="" className="img-fluid mx-auto d-block" width='280'/>
            </div>
          </Col>)
		}
        </Row>
      </Container>
    </section>
  );
}


export default Hero;
