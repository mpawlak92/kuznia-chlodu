import LandingPage from '../components/LandingPage/LandingPage';
import Menu from '../components/Menu/Menu';
import Section from '../components/Section/Section';
import Services from './services';

const ScrolledPage = () => {
  return (
    <>
      <Menu />
      <LandingPage />
      <Section id='services'>
        <Services />
      </Section>
      <Section bgcolor='blue' id='about' />
    </>
  );
};

export default ScrolledPage;
