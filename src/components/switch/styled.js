/* eslint-disable no-nested-ternary */
import styled from 'styled-components';
import { Field } from 'formik';

export const HiddenCheckbox = styled(Field).attrs(({ noFormik, type }) => ({
  as: noFormik ? 'input' : Field,
  type: type || 'checkbox',
}))`
  display: none;

  &:checked + label::before {
    transform: translateX(17px);
  }
`;

export const InputSwitch = styled.label`
  height: 20px;
  transition: 0.4s;
  position: relative;
  cursor: pointer;
  opacity: ${({ hasLeftLabel, disabled }) => (hasLeftLabel ? 1 : disabled ? 0.25 : 1)};
  width: 50px;
  margin: 0 0 0 ${({ hasLeftLabel }) => (hasLeftLabel ? '16px' : '0')};

  &::before {
    content: '';
    position: absolute;
    border-radius: 50%;
    height: 9px;
    width: 9px;
    left: 4px;
    bottom: 5px;
    transition: 0.4s;
    background-color: ${props => props.theme.accent};
  }
  &::after {
    background-color: transparent;
    border-radius: 34px;
    content: '';
    position: absolute;
    height: 19px;
    width: 34px;
    bottom: 0;
    border: 1px solid ${props => props.theme.highAccent};
  }
`;

export const Label = styled.label`
  font-weight: 700;
  margin: 0;
  color: ${({ disabled, theme }) => (disabled ? theme.disabled : theme.opposite)};
`;

export const LeftLabel = styled.label`
  font-weight: 700;
  margin: 0;
  color: ${({ disabled, theme }) => (!disabled ? theme.disabled : theme.opposite)};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${({ centered }) => (centered ? `display: flex; flex: 1; justify-content: center;` : '')};
  ${({ $bsStyle }) => $bsStyle || ''}
`;
