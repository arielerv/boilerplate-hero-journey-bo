import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { Container } from './styled';

const LoadingPage = ({ $bsStyle }) => (
  <Container $bsStyle={$bsStyle}>
    <FontAwesomeIcon icon={faSpinner} pulse height={80} width={80} />
  </Container>
);

LoadingPage.propTypes = {
  $bsStyle: PropTypes.shape({}),
};

LoadingPage.defaultProps = {
  $bsStyle: undefined,
};

export default LoadingPage;
