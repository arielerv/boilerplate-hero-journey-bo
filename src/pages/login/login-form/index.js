import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { TextBoxCustom } from 'styled/inputs';
import { LoadingButton, MessageError } from 'components';
import { CustomButton } from 'styled/buttons';
import { getIsLoading, getError } from 'store/auth/selectors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

import { Form, WrapperInput, Icon } from './styled';

const LoginForm = ({ handleSubmit, submitForm }) => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  return (
    <Form onSubmit={handleSubmit}>
      <WrapperInput>
        <Icon>
          <FontAwesomeIcon icon={faUser} />
        </Icon>
        <TextBoxCustom
          name="email"
          type="email"
          placeholder="email"
          onKeyDown={e => (e.charCode || e.keyCode) === 13 && submitForm()}
          $bsStyle={{ height: '40px', lineHeight: '40px', paddingLeft: '50px' }}
        />
      </WrapperInput>
      <MessageError name="email" />
      <WrapperInput>
        <Icon>
          <FontAwesomeIcon icon={faLock} />
        </Icon>
        <TextBoxCustom
          name="password"
          type="password"
          placeholder="password"
          onKeyDown={e => (e.charCode || e.keyCode) === 13 && submitForm()}
          $bsStyle={{ height: '40px', lineHeight: '40px', paddingLeft: '50px' }}
        />
      </WrapperInput>
      <MessageError name="password" messageError={error} />
      <LoadingButton
        type="submit"
        component={CustomButton}
        label="Sign in"
        isLoading={isLoading}
        $bsStyle={{ width: '180px', alignSelf: 'center', borderRadius: '25px' }}
      />
    </Form>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
};

export default LoginForm;
