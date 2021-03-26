import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  z-index: 1;
  height: 100%;
  transition: max-width 200ms ease-in-out;
  max-width: ${({ isOpen }) => (isOpen ? '400px' : 0)};
  left: 0;
  right: 0;
  background: ${props => props.theme.accent};
  overflow: auto;
  overflow-x: hidden;
  @media screen and (max-width: 400px) {
    max-width: ${({ isOpen }) => (isOpen ? '100%' : 0)};
  }
`;

export const Content = styled.div`
  flex-direction: column;
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 100%;
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  min-width: 400px;
  @media screen and (max-width: 400px) {
    min-width: 100%;
  }
  span {
    letter-spacing: 0.02px;
    color: #363a42;
    margin: 20px;
  }
`;

export const Title = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
  color: white;
  font-weight: bold;
  font-family: Bebas, sans-serif;
  letter-spacing: 1px;
`;

export const ToggleButton = styled.button.attrs({ type: 'button', 'aria-label': 'icon' })`
  left: 30px;
  top: 20px;
  width: 30px;
  height: 30px;
  position: fixed;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  z-index: 9999999;
  background: transparent;
  border: none;

  span {
    display: block;
    position: absolute;
    height: 4px;
    background: #252932;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
    background: ${props => props.theme.highAccent};
  }

  .top {
    width: 20px;
    left: 5px;
    top: 0;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }

  .mid {
    width: 30px;
    top: 10px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }

  .bot {
    width: 20px;
    left: 5px;
    top: 20px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }

  .top.open {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    top: 0;
    left: 3px;
    width: 25px;
  }

  .mid.open {
    width: 0;
    opacity: 0;
  }

  .bot.open {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    top: 18px;
    left: 2px;
    width: 25px;
  }

  &:active,
  :focus {
    outline: 0;
    opacity: 1;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
`;
