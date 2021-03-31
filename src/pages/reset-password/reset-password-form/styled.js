import styled from 'styled-components';
import { Form as FormFormik } from 'formik';

export const Form = styled(FormFormik).attrs({ noValidate: true })`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 38px;
  align-items: center;
`;
