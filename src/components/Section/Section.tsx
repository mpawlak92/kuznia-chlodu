import styled from 'styled-components';
import { ReactNode } from 'react';

type propsType = {
  id: string;
  bgcolor?: string;
  wrapper: boolean;
  children?: ReactNode;
};

const Section = ({
  id,
  bgcolor,
  wrapper,
  children,
}: propsType): JSX.Element => {
  return (
    <SectionContainer bgcolor={bgcolor} id={id}>
      {wrapper === true ? (
        <Wrapper bgcolor={bgcolor}>{children}</Wrapper>
      ) : (
        <>{children}</>
      )}
    </SectionContainer>
  );
};

export default Section;

const SectionContainer = styled.section<Pick<propsType, 'bgcolor'>>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  padding: 6rem 0;
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
