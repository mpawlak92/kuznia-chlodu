import styled from 'styled-components';
import OwnerImg from '../assets/service_service.jpg';
import { device } from '../style/Brakepoints';

const About = () => {
  return (
    <SectionContainer>
      <SectionHeading>O nas</SectionHeading>
      <AboutContainer>
        <OwnerIMG src={OwnerImg}></OwnerIMG>
        <AboutText>
          <h3>Kuznia Chłodu</h3>
          <p>
            Zajmujemy się kompleksową obsługą klimatyzacji stacjonarnej i
            samochodowej.
          </p>
          <p>
            Jesteśmy firmą która klimatyzacją zajmuje się od 1998r. Obecnie
            rozszerzyliśmy działalność o klimatyzację samochodową. Montujemy
            klimatyzację w domach, biurach, blokach jak również w warsztatach.
            Posiadamy mobilny serwis klimatyzacji samochodowej z dojazdem do
            klienta.
          </p>
          <p>W razie poważniejszych usterek zapraszamy do naszego warsztatu.</p>
        </AboutText>
      </AboutContainer>
    </SectionContainer>
  );
};
export default About;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 5rem;
`;
const SectionHeading = styled.h2`
  width: 100%;
  margin: 1em 0;

  font-size: 1em;
  color: ${(props) => props.theme.palette.secondary.contrastText};
  text-align: center;
`;

const AboutContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  @media ${device.tablet} {
    margin-bottom: 8rem;
  }
  @media ${device.laptopL} {
    margin: 0 auto;
    margin-bottom: 8rem;
    max-width: 80%;
  }
`;
const OwnerIMG = styled.div<{ src: string }>`
  max-width: 100%;
  min-height: 500px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;

  @media ${device.mobileM} {
    box-shadow: 11px 13px 8px 2px
      ${(props) => props.theme.palette.secondary.blackHalfTransparent};
  }
  @media ${device.tablet} {
    max-width: 60%;
  }
`;
const AboutText = styled.div`
  max-width: 100%;
  margin: 2em 0;
  padding: 0.5em;
  font-size: 4rem;
  background-size: cover;
  background-position: center;
  border: 2px solid ${(props) => props.theme.palette.common.primary};

  color: ${(props) => props.theme.palette.primary.contrastText};
  h3 {
    font-size: 1em;
    text-align: center;
    margin-bottom: 0.5em;
    color: ${(props) => props.theme.palette.secondary.contrastText};
  }
  @media ${device.tablet} {
    position: absolute;
    top: 50%;
    right: 0%;
    transform: translateY(-50%);
    width: 50%;
    margin: 0;
    font-size: 3rem;
    background-color: ${(props) => props.theme.palette.primary.main};
    border: 4px solid ${(props) => props.theme.palette.common.primary};
  }
  @media ${device.laptop} {
    font-size: 3.5rem;
  }
`;
