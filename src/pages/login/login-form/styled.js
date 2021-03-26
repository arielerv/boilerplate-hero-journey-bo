import styled from 'styled-components';
import { Form as FormFormik } from 'formik';

export const Form = styled(FormFormik).attrs({
  noValidate: true,
})`
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 280px;
  margin-top: 2vh;
  width: 100%;
`;
