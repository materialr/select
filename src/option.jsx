import PropTypes from 'prop-types';
import React from 'react';

const SelectOption = ({ disabled, label, value }) => (
  <option disabled={disabled} value={value}>{label}</option>
);

SelectOption.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

SelectOption.defaultProps = {
  disabled: false,
};

export default SelectOption;
