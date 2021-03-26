import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage } from 'formik';

import { Error, WrapperMessage, EmptyDiv, Wrapper } from './styled';

const MessageError = ({ name, component, messageError, noShow, $bsStyle }) => {
  if (messageError) {
    return <WrapperMessage $bsStyle={$bsStyle}>{messageError}</WrapperMessage>;
  }
  if (!name || noShow) {
    return <EmptyDiv $bsStyle={$bsStyle} />;
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
  noShow: PropTypes.bool,
  $bsStyle: PropTypes.shape({}),
};

MessageError.defaultProps = {
  name: null,
  component: 'div',
  messageError: null,
  noShow: false,
  $bsStyle: {},
};

export default MessageError;
