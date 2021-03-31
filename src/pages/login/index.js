import React from 'react';
import { useDispatch } from 'react-redux';
import authCreator from 'store/auth/actions';
import { Formik } from 'formik';
import { routes } from 'constant';
import { LinkButton } from 'styled/buttons';
import { push } from 'connected-react-router';

import validationSchema from './validation-schema';
import { Container, Content } from './styled';
import LoginForm from './login-form';

const Login = () => {
  const dispatch = useDispatch();
  const goToPath = e => dispatch(push(e.target.id));

  const handleSubmit = values => {
    return dispatch(authCreator.authLoginRequest(values.email, values.password));
  };

  return (
    <Container>
      <Content>
        <Formik
          component={LoginForm}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          initialValues={{ email: '', password: '' }}
        />
        <LinkButton
          id={routes.RECOVERY_PASSWORD}
          onClick={goToPath}
          $bsStyle={{ fontSize: '12px' }}
        >
          Forgot password?
        </LinkButton>
        <br />
        <LinkButton id={routes.REGISTER} onClick={goToPath}>
          Sign up
        </LinkButton>
      </Content>
    </Container>
  );
};

export default Login;
