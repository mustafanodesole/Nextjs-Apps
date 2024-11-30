
import HeroSection from "./views/heroSection/HeroSection";
import SocailIcons from "./views/socialIcons/SocailIcons";
import About from "./views/about/about";
import Wrapper from "./components/wrap/wrapper";
import Portfolio from "./views/portfolio/Portfolio";
import Contact from "./views/contact/Contact";
import Resume from "./views/resume/Resume";
import Footer from "./views/footer/Footer";
import Services from "./views/services/services";


export default function Home() {
  return (
    <>
      <HeroSection />
      <Wrapper>
        <SocailIcons />
        <About />
        <Services />
        <Portfolio />
        <Resume />
        <Contact />
        <Footer />
      </Wrapper>
    </>
  );
}
