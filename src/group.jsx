import PropTypes from 'prop-types';
import React from 'react';

const SelectGroup = ({ children, label }) => (<optgroup label={label}>{children}</optgroup>);

SelectGroup.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  label: PropTypes.string.isRequired,
};

export default SelectGroup;
