import LandingPage from '../components/LandingPage/LandingPage';
import Menu from '../components/Menu/Menu';
import Section from '../components/Section/Section';
import Services from './Services';
const ScrolledPage = () => {
  return (
    <>
      <Menu />
      <LandingPage />
      <Section wrapper={false} id='services'>
        <Services />
      </Section>

      <Section wrapper={false} bgcolor='blue' id='about' />
    </>
  );
};

export default ScrolledPage;
