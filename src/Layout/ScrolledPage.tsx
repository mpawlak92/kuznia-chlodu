import LandingPage from '../components/LandingPage/LandingPage';
import Menu from '../components/Menu/Menu';
import Section from '../components/Section/Section';
import About from './About';
import Services from './Services';
const ScrolledPage = () => {
  return (
    <>
      <Menu />

      <LandingPage />

      <Section wrapper={false} id='services'>
        <Services />
      </Section>

      <Section wrapper={true} id='about'>
        <About />
      </Section>
    </>
  );
};

export default ScrolledPage;
