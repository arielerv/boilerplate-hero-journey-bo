import styled from 'styled-components';

export const CustomButton = styled.button.attrs(({ type }) => ({ type: type || 'button' }))`
  cursor: ${({ cursor }) => cursor || 'pointer'};
  color: white;
  font-weight: 700;
  background: ${props => props.theme.accent};
  border-radius: 10px;
  font-family: 'Helvetica', sans-serif;
  font-size: 13px;
  line-height: 221.4%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  width: 100%;
  height: 39px;
  padding: 0 31px;
  border: transparent;
  transform: translate(0, 0);
  max-width: 300px;
  min-height: 39px;
  background: ${props => props.theme.accent};
  &:hover {
    color: ${props => props.theme.highAccent};
  }
  &:disabled {
    padding-left: 11px;
    padding-right: 11px;
    border-color: #6c757d;
    cursor: not-allowed;
    filter: ${({ noOpacity, greyDisabled }) =>
      noOpacity || greyDisabled ? 'initial' : 'brightness(0.7)'};
    opacity: ${({ noOpacity, greyDisabled }) => (noOpacity || greyDisabled ? 1 : 0.9)};
    background: ${props => props.theme.disabled};
  }

  &:active,
  :focus {
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  ${({ $bsStyle }) => $bsStyle || ''}
`;

export const LinkButton = styled.button.attrs(({ type }) => ({
  type: type || 'button',
}))`
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
  border: none;
  color: ${props => props.theme.opposite};
  width: auto;
  padding: 0 10px;
  letter-spacing: 0.05em;
  font-family: 'Helvetica', sans-serif;
  font-style: normal;
  height: 32px;
  display: block;
  background: transparent;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.highAccent};
  }
  &:disabled {
    color: ${props => props.theme.disabled};
    cursor: not-allowed;
  }
  &:active,
  :focus {
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  ${({ $bsStyle }) => $bsStyle || ''}
`;
