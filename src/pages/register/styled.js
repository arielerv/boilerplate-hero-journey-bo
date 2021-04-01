import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  overflow-y: auto;
  background: ${props => props.theme.deep};
  place-content: center;
  padding-bottom: 50px;
`;
