
import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
//import MobileFeature from "../components/MobileFeature"
import Service from "../components/Service";
import About from "../components/About";
import Footer from "../components/Footer";
import Datenschutz from "../components/Datenschutz";

const Index = () => {
  return (
    <Layout pageTitle="Talspiegelrechner">
      <Header />
	  <Hero />
	  <Feature />
	  <Service />
	<Datenschutz />	  
	  <About />
	  <Footer />
    </Layout>
  )
}
export default Index;