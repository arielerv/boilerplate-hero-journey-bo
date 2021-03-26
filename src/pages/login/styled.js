import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => props.theme.deep};
  padding: 50px 0;
  @media screen and (max-height: 1280px) {
    padding: 5vh 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
`;
