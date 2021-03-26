import React from 'react';
import PropTypes from 'prop-types';

import { Container, HiddenCheckbox, InputSwitch, Label, LeftLabel } from './styled';

const Switch = ({
  name,
  value,
  setFieldValue,
  onChange,
  leftLabel,
  label,
  centered,
  $bsStyle,
  noFormik,
}) => {
  const handleChange = () => setFieldValue(name, !value);

  return (
    <Container centered={centered} $bsStyle={$bsStyle}>
      {leftLabel && <LeftLabel disabled={!value}>{leftLabel}</LeftLabel>}
      <HiddenCheckbox
        type="checkbox"
        id="name"
        name={name}
        value={value}
        onChange={onChange || handleChange}
        checked={value}
        noFormik={noFormik}
      />
      <InputSwitch htmlFor="name" disabled={!value} hasLeftLabel={!!leftLabel} />
      {label && <Label disabled={!value}>{label}</Label>}
    </Container>
  );
};

Switch.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.bool,
  setFieldValue: PropTypes.func,
  onChange: PropTypes.func,
  leftLabel: PropTypes.string,
  label: PropTypes.string,
  centered: PropTypes.bool,
  $bsStyle: PropTypes.shape({}),
  noFormik: PropTypes.bool,
};

Switch.defaultProps = {
  onChange: undefined,
  value: false,
  setFieldValue: undefined,
  centered: false,
  leftLabel: null,
  label: null,
  $bsStyle: {},
  noFormik: false,
};

export default Switch;
