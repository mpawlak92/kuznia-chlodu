import styled from 'styled-components';
import gradient from '../../assets/gradient.png';
import stick from '../../assets/air_conditioner.png';
import stick2 from '../../assets/air_conditioner2.png';
const LandingPage = () => {
  return (
    <LandingPageContainer id='#'>
      <Gradient src={gradient} alt='' />
      <Stick src={stick} alt='' />
      <Stic_two src={stick2} alt='' />
      <LandingPage_text>
        <h1>Inteligentne systemy klimatyzacji</h1>
        <button>Oferta</button>
      </LandingPage_text>
    </LandingPageContainer>
  );
};

export default LandingPage;

const LandingPageContainer = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  color: ${(props) => props.theme.palette.primary.contrastText};
  background-color: ${(props) => props.theme.palette.primary.main};
  z-index: 100;
`;
const LandingPage_text = styled.div`
  position: absolute;
  top: 120px;
  right: 0px;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  width: 40vw;
  padding: 2rem 5rem;
  z-index: 100;
  h1 {
    font-size: 5rem;
    text-transform: uppercase;
    text-align: right;
    color: ${(props) => props.theme.palette.secondary.contrastText};
  }
  button {
    width: 20rem;
    height: 5rem;
    font-size: 2rem;
    margin-top: 5rem;
    color: ${(props) => props.theme.palette.primary.contrastText};
    border: 2px solid ${(props) => props.theme.palette.common.secondary};
    border-radius: 8px;
    cursor: pointer;
  }
`;
const Gradient = styled.img`
  position: absolute;
  width: auto;
  max-width: 55%;
  height: 100vh;
  z-index: 98;
`;

const Stick = styled.img`
  position: absolute;
  width: auto;
  max-width: 40%;
  bottom: 0;
  left: 2%;
  z-index: 99;
`;
const Stic_two = styled.img`
  position: absolute;
  width: auto;
  max-width: 25%;
  bottom: 0;
  left: 35%;
  z-index: 99;
`;
