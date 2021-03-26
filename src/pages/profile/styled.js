import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  background: ${props => props.theme.deep};
`;

export const Text = styled.p`
  color: ${props => props.theme.opposite};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  margin: 20px 10px;
`;

export const Wrapper = styled.div`
  margin: 0 20px;
  display: flex;
  flex-direction: row;
  min-width: 250px;
`;
