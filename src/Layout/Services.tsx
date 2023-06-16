import styled from 'styled-components';
import homeImg from '../assets/service_home.jpg';
import mobileImg from '../assets/service_mobile.jpg';
import serviceImg from '../assets/service_service.jpg';
import saleImg from '../assets/saleImg.png';
import { Link } from 'react-router-dom';
import { device } from '../style/Brakepoints';

const Services = () => {
  return (
    <>
      <CardContainer>
        <SectionHeading>Nasze usługi</SectionHeading>

        <ServiceCard>
          <ServiceCard_cover img={homeImg}>
            <ServiceCard_textBelt>Do domu i biura</ServiceCard_textBelt>
          </ServiceCard_cover>
          <ServiceCard_secondSide>
            <Link className='link' to='/domowa'>
              <h2>Do domu i biura</h2>
              <p>
                Dobierzemy, przywieziemy, zamontujemy i będziemy dbać o kondycję
                Twojej klimatyzacji.
              </p>
              <p className='fake-link'>
                Kliknij w kartę, aby dowiedzieć się wiecej.
              </p>
            </Link>
          </ServiceCard_secondSide>
        </ServiceCard>

        <ServiceCard>
          <ServiceCard_cover img={mobileImg}>
            <ServiceCard_textBelt>Samochodowa - mobilna</ServiceCard_textBelt>
          </ServiceCard_cover>
          <ServiceCard_secondSide>
            <Link className='link' to='/mobilna'>
              <h2>Samochodowa - mobilna</h2>
              <p>
                Mobilny serwis klimatyzacji samochodowej bezpośrednio u klienta.
              </p>
              <p className='fake-link'>
                Kliknij w kartę, aby dowiedzieć się wiecej.
              </p>
            </Link>
          </ServiceCard_secondSide>
        </ServiceCard>

        <ServiceCard>
          <ServiceCard_cover img={serviceImg}>
            <ServiceCard_textBelt>Serwis</ServiceCard_textBelt>
          </ServiceCard_cover>
          <ServiceCard_secondSide>
            <Link className='link' to='/serwis'>
              <h2>Serwis</h2>
              <p>
                Czyszczenie i serwis klimatyzacji stacjonarnej i samochodowej.
              </p>
              <p className='fake-link'>
                Kliknij w kartę, aby dowiedzieć się wiecej.
              </p>
            </Link>
          </ServiceCard_secondSide>
        </ServiceCard>
      </CardContainer>
      <AdvertContainer>
        <h3>Stali klienci mogą liczyć na atrakcyjne rabaty!</h3>
        <AdvertContainer_img src={saleImg}></AdvertContainer_img>
        <img src='' alt='' />
      </AdvertContainer>
    </>
  );
};

export default Services;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 90%;
  max-width: 1600px;
  font-size: 5rem;
  color: ${(props) => props.theme.palette.primary.contrastText};
`;
const SectionHeading = styled.h2`
  width: 100%;
  margin: 4rem 0;
  font-size: 1em;
  text-align: center;
  color: ${(props) => props.theme.palette.secondary.contrastText};
`;

const ServiceCard_cover = styled.div<{ img: string }>`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 8px;
  box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.3);
  transition: 0.8s;

  &:hover {
    transform: rotateY(180deg);
  }
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
  background-color: ${(props) =>
    props.theme.palette.secondary.mainSemiTransparent};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;
const ServiceCard_secondSide = styled.div`
  position: relative;
  top: -100%;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: #fefefe;
  background-image: linear-gradient(
    315deg,
    ${(props) => props.theme.palette.common.white} 0%,
    ${(props) => props.theme.palette.common.primary} 74%
  );
  border-radius: 8px;
  h2 {
    margin-bottom: 0.2em;
    font-size: 1em;
  }
  transition: 0.8s;
  opacity: 0;
  transform: rotateY(-180deg);

  .link {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    padding: 1rem;
    font-size: 3rem;
    color: ${(props) => props.theme.palette.common.black};
    text-decoration: none;
  }
  .fake-link {
    font-size: 1.5rem;
    margin: 0.6rem;
    color: purple;
  }
`;
const ServiceCard = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  min-width: 330px;
  max-width: 450px;
  min-height: 350px;
  margin: 2rem 1rem;
  border: none;
  border-radius: 8px;
  perspective: 800;
  cursor: pointer;
  transition: trasform 0.8s;

  &:hover ${ServiceCard_cover} {
    transform: rotateY(-180deg);
  }
  &:hover ${ServiceCard_secondSide} {
    transform: rotateY(0deg);
    opacity: 1;
  }
`;
const AdvertContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 250px;
  margin: 5rem 0;
  margin-bottom: 0;
  padding: 1rem;
  text-align: center;
  font-size: 5rem;
  background-color: ${(props) => props.theme.palette.common.primary};
  color: ${(props) => props.theme.palette.common.darkText};

  @media ${device.laptop} {
    font-size: 7rem;
  }
`;
const AdvertContainer_img = styled.img`
  display: none;
  width: auto;

  @media ${device.tablet} {
    display: flex;
    height: 60%;
  }
  @media ${device.laptopL} {
    height: 80%;
  }
`;
