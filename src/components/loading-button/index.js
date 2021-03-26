import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import { CustomButton } from 'styled/buttons';

const styles = { loader: { display: 'flex', justifyContent: 'center', margin: '2px 0' } };

const LoadingButton = ({
  label,
  component: Component,
  isLoading,
  spinColor,
  type,
  $bsStyle,
  ...props
}) => (
  <Component type={type} disabled={isLoading} style={$bsStyle} {...props}>
    {isLoading ? (
      <Loader style={styles.loader} type="TailSpin" color={spinColor} height={24} width={24} />
    ) : (
      label
    )}
  </Component>
);

LoadingButton.propTypes = {
  label: PropTypes.string.isRequired,
  component: PropTypes.shape({}),
  isLoading: PropTypes.bool,
  spinColor: PropTypes.string,
  $bsStyle: PropTypes.shape({}),
  type: PropTypes.string,
};

LoadingButton.defaultProps = {
  spinColor: 'white',
  component: CustomButton,
  isLoading: false,
  $bsStyle: null,
  type: 'button',
};

export default LoadingButton;
