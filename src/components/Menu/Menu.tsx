import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ThemeContext } from '../../stores/context';
import { Link } from 'react-scroll';
import sunImg from '../../assets/sun.svg';
import moonImg from '../../assets/moon.png';

const Menu = () => {
  const changeTheme = useContext(ThemeContext);

  const location = useLocation();

  const [isScrolledDown, setIsScrolledDown] = useState<boolean>(false);

  window.addEventListener('scroll', function () {
    if (scrollY >= 35 && isScrolledDown === false) {
      setIsScrolledDown(true);
    } else if (scrollY < 35 && isScrolledDown === true) {
      setIsScrolledDown(false);
    }
  });

  return (
    <MenuContainer isScrolled={isScrolledDown}>
      <Logo isScrolled={isScrolledDown}>
        {location.pathname === '/' ? (
          <Link activeClass='active' to='#' smooth={true} className='link'>
            <img src='/logo.png' alt='' />
            Kuznia Chłodu
          </Link>
        ) : (
          <NavLink className='link' to='/'>
            <img src='/logo.png' alt='' />
            Kuznia Chłodu
          </NavLink>
        )}
      </Logo>
      {changeTheme.theme === 'light' ? (
        <ThemeMoonBtn
          moonImg={moonImg}
          onClick={changeTheme.changeTheme}></ThemeMoonBtn>
      ) : (
        <ThemeSunBtn
          sunImg={sunImg}
          onClick={changeTheme.changeTheme}></ThemeSunBtn>
      )}

      <LinksContainer>
        {location.pathname === '/' ? (
          <Link
            to='#'
            spy={true}
            activeClass='active'
            duration={700}
            smooth={true}
            className='link'>
            Strona Główna
          </Link>
        ) : (
          <NavLink className='link' to='/'>
            Strona Główna
          </NavLink>
        )}
        {location.pathname === '/' ? (
          <Link
            activeClass='active'
            spy={true}
            to='services'
            duration={700}
            smooth={true}
            className='link'>
            Usługi
          </Link>
        ) : (
          <NavLink className='link' to='/'>
            Usługi
          </NavLink>
        )}
        {location.pathname === '/' ? (
          <Link
            activeClass='active'
            spy={true}
            duration={700}
            to='about'
            smooth={true}
            className='link'>
            O nas
          </Link>
        ) : (
          <NavLink className='link' to='/'>
            O nas
          </NavLink>
        )}

        <NavLink className='link' to='/kontakt'>
          Kontakt
        </NavLink>
      </LinksContainer>
    </MenuContainer>
  );
};

export default Menu;

const MenuContainer = styled.div<{ isScrolled: boolean }>`
  position: fixed;
  width: 100vw;
  height: ${(props) => (props.isScrolled ? `80px` : '100px')};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.palette.secondary.contrastText};
  background-color: ${(props) =>
    props.isScrolled ? props.theme.palette.secondary.main : 'transparent'};
  box-shadow: ${(props) =>
    props.isScrolled ? `0px 2px 4px -1px rgba(0, 0, 0, 0.2)` : 'none'};
  z-index: 101;
`;
const Logo = styled.div<{ isScrolled: boolean }>`
  display: flex;
  width: 40%;
  height: ${(props) => (props.isScrolled ? `80px` : '100px')};
  margin-left: 2%;
  font-size: 3.5rem;

  .link {
    display: flex;
    align-items: center;
    text-decoration: none;
    text-transform: uppercase;
    color: ${(props) => props.theme.palette.secondary.contrastText};

    &:hover {
      cursor: pointer;
    }
    img {
      height: ${(props) => (props.isScrolled ? `95px` : '110px')};
      padding: 20px;
    }
  }
`;

const ThemeButton = styled.div`
  width: 40px;
  aspect-ratio: 1/1;
  padding: 10px;
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 8px;
  background-color: ${(props) => props.theme.palette.common.primary};
  cursor: pointer;
`;
const ThemeSunBtn = styled(ThemeButton)<{
  sunImg: string;
}>`
  background-image: url(${(props) => props.sunImg});
`;
const ThemeMoonBtn = styled(ThemeButton)<{
  moonImg: string;
}>`
  background-image: url(${(props) => props.moonImg});
`;
const LinksContainer = styled.nav`
  width: 60%;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 2.5rem;
  text-transform: uppercase;
  padding: 3rem;
  .link {
    margin-right: 2rem;
    padding: 1rem;
    text-decoration: none;
    text-transform: uppercase;
    color: ${(props) => props.theme.palette.secondary.contrastText};
    &:hover {
      border-bottom: 4px solid
        ${(props) => props.theme.palette.common.secondary};
      cursor: pointer;
    }
    &:last-child {
      border-radius: 8px;
      background-color: ${(props) => props.theme.palette.common.primary};
      color: ${(props) => props.theme.palette.common.darkText};
    }
  }
  .active {
    border-bottom: 4px solid ${(props) => props.theme.palette.common.secondary};
  }
`;
