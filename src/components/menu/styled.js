import styled from 'styled-components';

export const SidebarItem = styled.button.attrs({ type: 'button' })`
  border: none;
  width: 100%;
  background: transparent;
  text-align: left;
  cursor: pointer;
  color: ${({ active, theme }) => (active ? theme.highAccent : theme.opposite)};
  padding: 25px;
  margin-left: 20px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 16px;
  &:disabled {
    color: ${props => props.theme.disabled};
    cursor: not-allowed;
  }
  &:hover {
    color: ${props => props.theme.middle};
  }
  &:last-of-type {
    border: none;
    margin-bottom: 0;
  }
  &:active,
  :focus {
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
`;
