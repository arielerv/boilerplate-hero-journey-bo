import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { initialState } from 'store/auth/initial-state';
import actionsCreator from 'store/auth/actions';
import { Title } from 'styled/base';
import { getEmailExists, getIsRegistered, getIsValidatingEmail } from 'store/auth/selectors';

import RegisterForm from './register-form';
import Registered from './registered';
import validationSchema from './validation-schema';
import { Container } from './styled';

const Register = () => {
  const dispatch = useDispatch();
  const isRegistered = useSelector(getIsRegistered);
  const emailExists = useSelector(getEmailExists);
  const isValidating = useSelector(getIsValidatingEmail);

  const handleSubmit = (values, { setFieldError }) => {
    if (Boolean(emailExists) && emailExists) {
      return setFieldError('email', 'Email is used.');
    }
    return !isValidating && dispatch(actionsCreator.authRegisterRequest(values));
  };

  return (
    <Container>
      <Title>Register</Title>
      {isRegistered && <Registered />}
      {!isRegistered && (
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialState.register}
          validationSchema={validationSchema}
          component={RegisterForm}
        />
      )}
    </Container>
  );
};

export default Register;
