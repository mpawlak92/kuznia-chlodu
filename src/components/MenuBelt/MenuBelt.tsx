import styled from 'styled-components';

const MenuBelt = () => {
  return <MenuContainer>pasek MenuContainer</MenuContainer>;
};

export default MenuBelt;

const MenuContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 80px;
  background-color: white;
  color: #000;
  box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.5);
  z-index: 101;
`;
