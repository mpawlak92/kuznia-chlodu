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
      {children}
    </SectionContainer>
  );
};

export default Section;
// Pick<propsType, 'bgcolor'>
const SectionContainer = styled.section<propsType>`
  display: flex;
  max-width: 100vw;
  height: 100vh;
  background-color: ${({ bgcolor }) => bgcolor || 'white'};
`;
