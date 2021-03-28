import React from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';
import find from 'lodash/find';

import customStyles from './custom-style';
import { Container } from './styled';

const CustomSelect = ({
  value,
  options,
  onChange,
  name,
  getOptionValue,
  getOptionLabel,
  placeholder,
  disabled,
  $bsStyle,
  ...props
}) => {
  return (
    <Container $bsStyle={$bsStyle}>
      <ReactSelect
        name={name}
        options={options}
        onChange={onChange}
        placeholder={placeholder}
        isClearable
        value={value ? find(options, option => getOptionValue(option) === value) : null}
        defaultValue={null}
        getOptionValue={getOptionValue}
        getOptionLabel={getOptionLabel}
        styles={customStyles}
        isDisabled={disabled}
        {...props}
      />
    </Container>
  );
};

CustomSelect.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({})),
  name: PropTypes.string,
  placeholder: PropTypes.string,
  getOptionValue: PropTypes.func,
  getOptionLabel: PropTypes.func,
  disabled: PropTypes.bool,
  $bsStyle: PropTypes.shape({}),
};

CustomSelect.defaultProps = {
  options: [],
  value: null,
  getOptionValue: option => option.id,
  getOptionLabel: option => option.name,
  disabled: false,
  placeholder: 'Select.',
  name: 'select',
  $bsStyle: null,
};

export default CustomSelect;
