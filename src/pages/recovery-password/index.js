import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import actionsCreator from 'store/auth/actions';
import { Title } from 'styled/base';
import { getIsEmailSent } from 'store/auth/selectors';

import RecoveryPasswordForm from './recovery-password-form';
import EmailSent from './email-sent';
import validationSchema from './validation-schema';
import { Container } from './styled';

const RecoveryPassword = () => {
  const dispatch = useDispatch();
  const isEmailSent = useSelector(getIsEmailSent);
  const handleSubmit = values => dispatch(actionsCreator.authRecoveryPasswordRequest(values.email));

  return (
    <Container>
      <Title>Recovery Password</Title>
      {isEmailSent && <EmailSent />}
      {!isEmailSent && (
        <Formik
          onSubmit={handleSubmit}
          initialValues={{ email: '' }}
          validationSchema={validationSchema}
          component={RecoveryPasswordForm}
        />
      )}
    </Container>
  );
};

export default RecoveryPassword;
