import styled, { css } from 'styled-components';
import { Field } from 'formik';

const placeholder = css`
  opacity: 0.6;
  color: ${props => props.theme.opposite};
  filter: brightness(150%);
`;

export const InputCustom = styled.input.attrs(({ noFormik, type }) => ({
  as: noFormik ? 'input' : Field,
  type: type || 'text',
}))`
  border: 0;
  border-bottom: 1px solid ${props => props.theme.opposite};
  text-align: center;
  opacity: 1;
  color: ${props => props.theme.opposite};
  font-family: 'Helvetica', Arial, sans-serif;
  background: transparent;
  margin-bottom: 10px;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  display: block;
  transition: border-color 0.15s ease-in-out;
  overflow: visible;
  width: 100%;
  outline: none;
  text-decoration: none !important;
  &:active,
  &:focus {
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
    transition: background-color 5000000s ease-in-out 0s;
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
