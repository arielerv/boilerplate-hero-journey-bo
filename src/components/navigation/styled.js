import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const WrapperItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 45px;
  min-width: 300px;
  max-width: 500px;
  background: ${props => props.theme.accent};
  &:last-of-type {
    border-bottom: 1px solid ${props => props.theme.black};
  }
`;

export const Item = styled.button.attrs({ type: 'button' })`
  background: transparent;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  font-size: 18px;
  border: 1px solid ${props => props.theme.black};
  border-bottom: none;
  color: ${props => props.theme.white};
  cursor: pointer;
  &:hover {
    background: ${props => props.theme.highAccent};
    color: ${props => props.theme.white};
  }
  &:hover:disabled {
    cursor: not-allowed;
    background: ${props => props.theme.accent};
    color: ${props => props.theme.disabled};
  }
  &:disabled {
    cursor: not-allowed;
    color: ${props => props.theme.disabled};
  }
  &:active,
  :focus {
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
    background: ${props => props.theme.black};
    color: ${props => props.theme.white};
  }
`;

export const BackButton = styled.button.attrs({ type: 'button' })`
  background: ${props => props.theme.highAccent};
  color: ${props => props.theme.base};
  border: none;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin-right: 20px;
  &:active,
  :focus {
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
`;
