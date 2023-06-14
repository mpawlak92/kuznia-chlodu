import styled from 'styled-components';
import homeImg from '../assets/service_home.jpg';
import mobileImg from '../assets/service_mobile.jpg';
import serviceImg from '../assets/service_service.jpg';

const Services = () => {
  return (
    <SecrionContainer>
      <SectionHeading>Nasze usługi</SectionHeading>
      <ServiceCard img={homeImg}>
        <ServiceCard_cover>
          <ServiceCard_textBelt>Do domu i biura</ServiceCard_textBelt>
        </ServiceCard_cover>
      </ServiceCard>

      <ServiceCard img={mobileImg}>
        <ServiceCard_cover>
          <ServiceCard_textBelt>Samochodowa</ServiceCard_textBelt>
        </ServiceCard_cover>
      </ServiceCard>

      <ServiceCard img={serviceImg}>
        <ServiceCard_cover>
          <ServiceCard_textBelt>Serwis</ServiceCard_textBelt>
        </ServiceCard_cover>
      </ServiceCard>
    </SecrionContainer>
  );
};

export default Services;

const SecrionContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  font-size: 4rem;
  color: ${(props) => props.theme.palette.primary.contrastText};
`;
const SectionHeading = styled.h2`
  width: 100%;
  margin: 1rem 0;
  font-size: 1em;
  text-align: center;
  color: ${(props) => props.theme.palette.secondary.contrastText};
`;
const ServiceCard = styled.button<{ img: string }>`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  min-width: 330px;
  max-width: 450px;
  min-height: 350px;
  margin: 2rem 1rem;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  border-radius: 8px;
  box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;
const ServiceCard_cover = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    25deg,
    rgba(0, 0, 0, 0.3) 0%,
    transparent 85%
  );
  border-radius: 8px;
`;
const ServiceCard_textBelt = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30%;
  font-size: 3rem;
  color: ${(props) => props.theme.palette.secondary.contrastText};
  background-color: ${(props) => props.theme.palette.secondary.mainSemiTransparent};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;
