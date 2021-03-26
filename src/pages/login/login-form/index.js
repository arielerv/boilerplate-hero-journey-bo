import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { InputCustom } from 'styled/inputs';
import { LoadingButton, MessageError } from 'components';
import { CustomButton } from 'styled/buttons';
import { getIsLoading, getError } from 'store/auth/selectors';

import { Form } from './styled';

const LoginForm = ({ handleSubmit, submitForm }) => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  return (
    <Form onSubmit={handleSubmit}>
      <InputCustom
        name="email"
        type="email"
        placeholder="email"
        onKeyDown={e => (e.charCode || e.keyCode) === 13 && submitForm()}
      />
      <MessageError name="email" />
      <InputCustom
        name="password"
        type="password"
        placeholder="password"
        onKeyDown={e => (e.charCode || e.keyCode) === 13 && submitForm()}
        $bsStyle={{ marginTop: '2rem' }}
      />
      <MessageError name="password" />
      <MessageError messageError={error} />
      <LoadingButton
        type="submit"
        component={CustomButton}
        label="Sign in"
        isLoading={isLoading}
        $bsStyle={{ width: '160px', alignSelf: 'center' }}
      />
    </Form>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
};

export default LoginForm;
