import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage } from 'formik';

import { Error, Wrapper } from './styled';

const MessageError = ({ name, component, messageError, $bsStyle }) => {
  if (messageError || !name) {
    return (
      <Wrapper>
        <Error $bsStyle={$bsStyle}>{messageError}</Error>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <ErrorMessage
        name={name}
        component={component}
        render={msg => <Error $bsStyle={$bsStyle}>{msg}</Error>}
      />
    </Wrapper>
  );
};

MessageError.propTypes = {
  name: PropTypes.string,
  component: PropTypes.string,
  messageError: PropTypes.string,
  $bsStyle: PropTypes.shape({}),
};

MessageError.defaultProps = {
  name: null,
  component: 'div',
  messageError: null,
  $bsStyle: {},
};

export default MessageError;
