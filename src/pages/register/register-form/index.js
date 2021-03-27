import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { MessageError, Check, LoadingButton } from 'components';
import { InputCustom } from 'styled/inputs';
import { useDispatch, useSelector } from 'react-redux';
import { getIsRegistering, getEmailExists, getError } from 'store/auth/selectors';
import actionsCreator from 'store/auth/actions';
import { VALID_EMAIL } from 'constant/regex';

import { Form } from './styled';

const RegisterForm = ({ submitForm, values }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsRegistering);
  const emailExists = useSelector(getEmailExists);
  const error = useSelector(getError);

  useEffect(() => {
    if (VALID_EMAIL.test(values.email)) {
      dispatch(actionsCreator.authVerifyEmailRequest(values.email));
    } else {
      dispatch(actionsCreator.authCleanValues());
    }
  }, [values.email]);

  return (
    <Form>
      <InputCustom
        name="name"
        placeholder="Name"
        onKeyDown={e => (e.charCode || e.keyCode) === 13 && submitForm()}
        $bsStyle={{ maxWidth: '298px', marginTop: '30px' }}
      />
      <MessageError name="name" />
      <InputCustom
        name="surname"
        placeholder="Surname"
        onKeyDown={e => (e.charCode || e.keyCode) === 13 && submitForm()}
        $bsStyle={{ maxWidth: '298px', marginTop: '30px' }}
      />
      <MessageError name="surname" />
      <InputCustom
        name="email"
        placeholder="Email"
        onKeyDown={e => (e.charCode || e.keyCode) === 13 && submitForm()}
        $bsStyle={{ maxWidth: '298px', marginTop: '30px' }}
      />
      <MessageError
        name="email"
        messageError={Boolean(emailExists) && emailExists && 'Email is used.'}
      />
      <InputCustom
        name="password"
        placeholder="Password"
        onKeyDown={e => (e.charCode || e.keyCode) === 13 && submitForm()}
        $bsStyle={{ maxWidth: '298px', marginTop: '30px' }}
      />
      <MessageError name="password" />
      <InputCustom
        name="confirmPassword"
        placeholder="Confirm password"
        onKeyDown={e => (e.charCode || e.keyCode) === 13 && submitForm()}
        $bsStyle={{ maxWidth: '298px', marginTop: '30px' }}
      />
      <MessageError name="confirmPassword" />
      <Check
        name="terms"
        label="I agree to Hero's Journey"
        $bsStyle={{ margin: '20px 0 30px 0' }}
      />
      <MessageError name="terms" />
      <MessageError messageError={error} />
      <LoadingButton type="submit" label="Submit" isLoading={isLoading} />
    </Form>
  );
};

RegisterForm.propTypes = {
  submitForm: PropTypes.func.isRequired,
  values: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
};

export default RegisterForm;
