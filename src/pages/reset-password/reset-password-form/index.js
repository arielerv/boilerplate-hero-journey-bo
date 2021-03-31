import React from 'react';
import PropTypes from 'prop-types';
import { MessageError, LoadingButton } from 'components';
import { InputCustom } from 'styled/inputs';
import { useSelector } from 'react-redux';
import { getIsLoading, getError } from 'store/auth/selectors';

import { Form } from './styled';

const ResetPasswordForm = ({ submitForm }) => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  return (
    <Form>
      <InputCustom
        name="password"
        placeholder="Password"
        onKeyDown={e => (e.charCode || e.keyCode) === 13 && submitForm()}
        $bsStyle={{ maxWidth: '298px', marginTop: '30px' }}
      />
      <MessageError name="password" />
      <MessageError messageError={error} />
      <LoadingButton type="submit" label="Submit" isLoading={isLoading} />
    </Form>
  );
};

ResetPasswordForm.propTypes = {
  submitForm: PropTypes.func.isRequired,
};

export default ResetPasswordForm;
