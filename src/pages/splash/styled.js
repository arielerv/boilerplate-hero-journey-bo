import styled from 'styled-components';
import logo from 'assets/png/logo200.png';
import logoWhite from 'assets/png/logo200-white.png';
import { CONST_THEMES } from '../../constant/themes';

export const Container = styled.div`
  -webkit-animation: fadein 0.5s;
  -moz-animation: fadein 0.5s;
  -o-animation: fadein 0.5;
  animation: fadein 1s;
  -webkit-animation-delay: 1s;
  -moz-animation-delay: 1s;
  -o-animation-delay: 1s;
  animation-delay: 1s;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
  height: 100%;
  width: 100%;
  background: ${props => props.theme.deep};
  @keyframes fadein {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  @-moz-keyframes fadein {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  @-webkit-keyframes fadein {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  @-o-keyframes fadein {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

export const Text = styled.label`
  color: ${props => props.theme.opposite};
  font-size: 28px;
  font-weight: 700;
  font-family: Helvetica, sans-serif;
`;

export const Logo = styled.img.attrs(props => ({
  src: props.theme.type === CONST_THEMES.DARK ? logoWhite : logo,
  alt: 'logo',
}))`
  max-width: 100px;
  margin-bottom: 50px;
  @media screen and (max-height: 1280px) {
    max-width: 14vh;
    max-height: 120px;
  }
`;
