import styled from 'styled-components';
import { ReactNode } from 'react';

type propsType = {
  id: string;
  bgcolor?: string;
  children?: ReactNode;
};

const Section = ({ id, bgcolor, children }: propsType): JSX.Element => {
  return (
    <SectionContainer bgcolor={bgcolor} id={id}>
      <Wrapper bgcolor={bgcolor}>{children}</Wrapper>
    </SectionContainer>
  );
};

export default Section;
// Pick<propsType, 'bgcolor'>
const SectionContainer = styled.section<propsType>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  background-color: ${(props) =>
    props.bgcolor ? props.bgcolor : props.theme.palette.primary.main};
`;
{
  /* <Pick<propsType, 'bgcolor'>> */
}
const Wrapper = styled.div<Pick<propsType, 'bgcolor'>>`
  display: flex;
  width: 90%;
  margin: 2rem 0;
  max-width: 1600px;
  background-color: ${(props) =>
    props.bgcolor ? props.bgcolor : props.theme.palette.primary.main};
`;
