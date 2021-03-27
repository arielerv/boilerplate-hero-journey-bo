import React from 'react';
import PropTypes from 'prop-types';

import { Checkbox, Label, Container } from './styled';

const Check = ({ name, label, $bsStyle }) => (
  <Container $bsStyle={$bsStyle}>
    <Checkbox id={name} name={name} />
    <Label htmlFor={name}>{label}</Label>
  </Container>
);

Check.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  $bsStyle: PropTypes.shape({}),
};

Check.defaultProps = {
  $bsStyle: '',
};

export default Check;
