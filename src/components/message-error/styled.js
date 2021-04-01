import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 40px;
`;

export const Error = styled.label`
  display: flex;
  justify-content: center;
  color: #7b2020;
  font-family: 'Helvetica', sans-serif;
  padding-top: 5px;
  ${({ $bsStyle }) => $bsStyle || ''}
`;
