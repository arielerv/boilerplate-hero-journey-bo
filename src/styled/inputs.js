import styled, { css } from 'styled-components';
import { Field } from 'formik';

const placeholder = css`
  opacity: 0.6;
  color: rgba(255, 255, 255, 0.7);
`;

export const InputCustom = styled(Field).attrs(({ noFormik, type }) => ({
  as: noFormik ? 'input' : Field,
  type: type || 'input',
}))`
  border-color: transparent transparent ${props => props.theme.opposite};
  text-align: center;
  opacity: 1;
  color: ${props => props.theme.opposite};
  font-family: 'Helvetica', Arial, sans-serif;
  border-width: 0 0 1px;
  border-top-style: initial;
  border-right-style: initial;
  border-left-style: initial;
  border-image: initial;
  border-bottom-style: solid;
  background: transparent;
  border-radius: 0 !important;
  margin-bottom: 10px;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  display: block;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  overflow: visible;
  width: 100%;
  &:active,
  &:focus {
    border-top: none;
    background: transparent;
    border-bottom: 2px solid ${props => props.theme.highAccent};
    box-shadow: none;
    outline: none;
    color: ${props => props.theme.opposite};
    border-bottom-color: ${props => props.theme.highAccent};
  }
  &:-webkit-autofill::first-line {
    font-size: initial;
    line-height: inherit;
    font-family: 'Helvetica', sans-serif;
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    font-family: 'Helvetica', sans-serif;
    transition: background-color 5000000s;
    background: transparent !important;
    -webkit-text-fill-color: ${props => props.theme.opposite} !important;
  }
  &::-webkit-input-placeholder {
    ${placeholder}
  }
  &:-moz-placeholder {
    ${placeholder}
  }
  &:-ms-input-placeholder {
    ${placeholder}
  }
  &::placeholder {
    ${placeholder}
  }
  ${({ $bsStyle }) => $bsStyle || ''}
`;
