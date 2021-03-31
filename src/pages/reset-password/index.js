import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import actionsCreator from 'store/auth/actions';
import { Title } from 'styled/base';
import { LinkButton } from 'styled/buttons';
import { getQuery } from 'utils';
import { MessageError } from 'components';
import { push } from 'connected-react-router';
import { routes } from 'constant';

import ResetPasswordForm from './reset-password-form';
import validationSchema from './validation-schema';
import { Container } from './styled';

const ResetPassword = () => {
  const dispatch = useDispatch();
  const token = getQuery().get('token');
  const email = getQuery().get('email');
  const goToLogin = () => dispatch(push(routes.HOME));

  const handleSubmit = values => {
    return dispatch(actionsCreator.authResetPasswordRequest(token, email, values.password));
  };

  return (
    <Container>
      {token && email && (
        <>
          <Title>Reset Password</Title>
          <Formik
            onSubmit={handleSubmit}
            initialValues={{ password: '' }}
            validationSchema={validationSchema}
            component={ResetPasswordForm}
          />
        </>
      )}
      {(!token || !email) && (
        <>
          <MessageError messageError="Error reset password." />
          <br />
          <LinkButton onClick={goToLogin} $bsStyle={{ marginTop: '10px' }}>
            Go to login
          </LinkButton>
        </>
      )}
    </Container>
  );
};

export default ResetPassword;
