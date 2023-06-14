import LandingPage from '../components/LandingPage/LandingPage';
import Menu from '../components/Menu/Menu';
import Section from '../components/Section/Section';


const ScrolledPage = () => {
  return (
    <>
      <Menu />
      <LandingPage />
      <Section bgcolor='green' id='services'>
        <p>xd</p>
      </Section>
      <Section bgcolor='blue' id='about' />
    </>
  );
};

export default ScrolledPage;
