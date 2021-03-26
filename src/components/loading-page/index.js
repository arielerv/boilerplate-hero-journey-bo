import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { Container } from './styled';

const LoadingPage = ({ background, spinColor, $bsStyle }) => (
  <Container background={background} $bsStyle={$bsStyle} spinColor={spinColor}>
    <FontAwesomeIcon icon={faSpinner} pulse height={80} width={80} />
  </Container>
);

LoadingPage.propTypes = {
  background: PropTypes.string,
  spinColor: PropTypes.string,
  $bsStyle: PropTypes.shape({}),
};

LoadingPage.defaultProps = {
  background: null,
  spinColor: 'rgb(92, 92, 92)',
  $bsStyle: undefined,
};

export default LoadingPage;
