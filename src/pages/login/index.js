import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authCreator from 'store/auth/actions';
import statusCreator from 'store/status/actions';
import { Formik } from 'formik';
import { routes } from 'constant';
import { LinkButton } from 'styled/buttons';
import { push } from 'connected-react-router';

import validationSchema from './validation-schema';
import { Container, Content } from './styled';
import LoginForm from './login-form';

const Login = () => {
  const dispatch = useDispatch();
  const goToSignUp = () => dispatch(push(routes.REGISTER));

  const handleSubmit = values => {
    return dispatch(authCreator.authLoginRequest(values.email, values.password));
  };

  useEffect(() => {
    dispatch(statusCreator.statusRequest());
  }, []);

  return (
    <Container>
      <Content>
        <Formik
          component={LoginForm}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          initialValues={{ email: '', password: '' }}
        />
        <br />
        <LinkButton white onClick={goToSignUp}>
          Sign up
        </LinkButton>
      </Content>
    </Container>
  );
};

export default Login;
