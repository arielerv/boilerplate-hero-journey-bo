import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-bottom: 10px;
  justify-content: ${({ center, right }) => {
    if (center) {
      return 'center';
    }
    return right ? 'flex-end' : 'initial';
  }};
  ${({ $bsStyle }) => $bsStyle || ''}
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${({ flex }) => (flex ? 1 : 'initial')};
  align-items: ${({ left, center, right }) => {
    if (!left && !center && !right) {
      return 'initial';
    }
    if (center) {
      return 'center';
    }
    return right ? 'flex-end' : 'flex-start';
  }};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'initial')};
  justify-content: ${({ centered }) => (centered ? 'center' : 'initial')};
  padding-right: ${({ right }) => (right ? '20px' : 0)};
  ${({ $bsStyle }) => $bsStyle || ''}
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border: 1px solid #2a2a2a;
  border-radius: 5px;
  background: #d6e8e8;
  padding: 10px;
  margin-bottom: 10px;
  min-width: 330px;
  ${({ $bsStyle }) => $bsStyle || ''}
`;

export const Title = styled.h1.attrs({ className: 'no-select' })`
  color: ${props => props.theme.highAccent};
  margin: 50px 0;
  text-align: center;
  font-family: Quicksand, sans-serif;
  letter-spacing: 2px;
  font-size: 2.5em;
  @media screen and (max-width: 400px) {
    margin: 7px 0 30px 20px;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  text-transform: uppercase;
  margin: 0;
  font-family: 'Helvetica', sans-serif;
  font-weight: bold;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.05em;
  ${({ $bsStyle }) => $bsStyle || ''}
`;

export const Group = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap-reverse;
`;

export const ButtonPanel = styled.div`
  width: 100%;
  min-width: 320px;
  display: flex;
  flex: 0.4;
  margin: 10px;
  @media screen and (max-width: 710px) {
    margin: 20px 0;
  }
`;

export const EmptyPage = styled.div`
  height: 100vh;
  position: fixed;
  width: 100vw;
  background: ${props => props.theme.deep};
`;
