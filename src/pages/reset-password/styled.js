import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  overflow-y: auto;
  justify-content: center;
  place-content: center;
  background: ${props => props.theme.deep};
`;
