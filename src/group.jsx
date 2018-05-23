import PropTypes from 'prop-types';
import React from 'react';

const SelectGroup = ({ children, label, ...props }) => (
  <optgroup label={label} {...props}>{children}</optgroup>
);

SelectGroup.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  label: PropTypes.string.isRequired,
};

export default SelectGroup;
