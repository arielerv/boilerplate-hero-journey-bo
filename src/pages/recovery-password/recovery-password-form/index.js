import React from 'react';
import PropTypes from 'prop-types';
import { MessageError, LoadingButton } from 'components';
import { InputCustom } from 'styled/inputs';
import { useSelector } from 'react-redux';
import { getIsLoading, getError } from 'store/auth/selectors';

import { Form } from './styled';

const RecoveryPasswordForm = ({ submitForm }) => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  return (
    <Form>
      <InputCustom
        name="email"
        placeholder="Email"
        onKeyDown={e => (e.charCode || e.keyCode) === 13 && submitForm()}
        $bsStyle={{ maxWidth: '298px', marginTop: '30px' }}
      />
      <MessageError name="email" />
      <MessageError messageError={error} />
      <LoadingButton type="submit" label="Submit" isLoading={isLoading} />
    </Form>
  );
};

RecoveryPasswordForm.propTypes = {
  submitForm: PropTypes.func.isRequired,
};

export default RecoveryPasswordForm;
