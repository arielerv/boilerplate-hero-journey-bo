import styled from 'styled-components';
import { Field } from 'formik';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  text-overflow: ellipsis;
  ${({ $bsStyle }) => $bsStyle || ''}
`;

export const Checkbox = styled(Field).attrs({ type: 'checkbox' })`
  &:not(:checked),
  &:checked {
    opacity: 0;
    display: none;
    visibility: hidden;
  }
  &:not(:checked) + label,
  &:checked + label {
    cursor: pointer;
    font-size: 13px;
    padding-left: 30px;
    position: relative;
  }

  &:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 0;
    width: 25px;
    height: 25px;
    border-radius: ${({ variant }) => (variant && variant === 'square' ? '10%' : '100%')};
    background-size: 52%;
    transform: translateY(-50%);
    transition: all 100ms ease-in-out;
    background-color: ${props => props.theme.accent};
    margin-top: 8px;
  }

  &:checked + label:before {
    content: '\\2713';
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    font-size: 25px;
    left: 0;
    width: 25px;
    height: 25px;
    border-radius: 100%;
    transform: translateY(-50%);
    transition: all 100ms ease;
    background-color: ${props => props.theme.accent};
    margin-top: 8px;
  }

  &:checked + label:before {
    background: green;
  }
`;

export const Label = styled.label`
  color: ${props => props.theme.opposite};
  font-family: 'Helvetica', sans-serif;
  height: 25px;
`;
