import styled from 'styled-components';
import { CONST_THEMES } from 'constant/themes';
import logoWhite from 'assets/png/logo200-white.png';
import logo from 'assets/png/logo200.png';

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
  height: 100%;
  justify-content: center;
  padding-bottom: 50px;
`;

export const WrapperImage = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

export const Logo = styled.img.attrs(props => ({
  src: props.theme.type === CONST_THEMES.DARK ? logoWhite : logo,
  alt: 'logo',
  width: '70px',
  height: '70px',
}))``;
