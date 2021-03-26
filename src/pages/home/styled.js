import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  background: ${props => props.theme.deep};
`;

export const Title = styled.h1.attrs({ className: 'no-select' })`
  color: ${props => props.theme.highAccent};
  margin: 50px 0;
  text-align: center;
  font-family: Quicksand, sans-serif;
  letter-spacing: 2px;
  font-size: 2.5em;
`;
