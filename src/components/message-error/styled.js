import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 40px;
`;

export const WrapperMessage = styled.label`
  display: flex;
  font-family: 'Helvetica', sans-serif;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  flex-direction: column;
  height: 40px;
  color: #7b2020;
  ${({ $bsStyle }) => $bsStyle || ''}
`;

export const EmptyDiv = styled.div`
  height: 40px;
  ${({ $bsStyle }) => $bsStyle || ''}
`;

export const Error = styled.label`
  display: flex;
  justify-content: center;
  color: #7b2020;
  font-family: 'Helvetica', sans-serif;
  ${({ $bsStyle }) => $bsStyle || ''}
`;
