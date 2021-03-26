import styled from 'styled-components';

export const Container = styled.footer`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  text-align: center;
  background: ${props => props.theme.accent};
  display: flex;
  max-height: 50px;
  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 20px;
  overflow: hidden;
  height: 100%;
  justify-content: space-between;
  flex-wrap: nowrap;
  width: 100%;
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  height: 100%;
  flex-grow: 1;
  justify-content: center;
  width: 100%;
  @media screen and (max-width: 678px) {
    ${({ noSmall }) => (noSmall ? 'display: none;' : '')}
  }
`;

export const Item = styled.p`
  color: ${props => props.theme.middle};
  text-decoration: none;
  font-size: 12px;
  margin: 0;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  text-align: ${({ align }) => align || 'center'};
  font-family: Bebas, sans-serif;
  letter-spacing: 1px;
`;

export const Right = styled.div`
  align-self: flex-end;
`;
