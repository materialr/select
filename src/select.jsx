import classnames from 'classnames';
import { MDCSelect } from '@material/select';
import PropTypes from 'prop-types';
import React from 'react';
import uuidv1 from 'uuid/v1';

import '@material/select/mdc-select.scss';

import SelectOption from './option';

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.elementRoot = undefined;
    this.select = undefined;
    this.state = { id: uuidv1() };
    this.getClassNames = this.getClassNames.bind(this);
    this.getClassNamesLabel = this.getClassNamesLabel.bind(this);
    this.getId = this.getId.bind(this);
    this.isEmpty = this.isEmpty.bind(this);
  }
  componentDidMount() {
    this.select = new MDCSelect(this.elementRoot);
  }
  componentWillUnmount() {
    this.select.destroy();
  }
  getClassNames() {
    const { box, className, disabled } = this.props;
    return classnames({
      'mdc-select': true,
      'mdc-select--box': box,
      'mdc-select--disabled': disabled,
      [className]: !!className,
    });
  }
  getClassNamesLabel() {
    return classnames({
      'mdc-floating-label': true,
      'mdc-floating-label--float-above': !this.isEmpty(),
    });
  }
  getId() {
    return this.props.id || this.state.id;
  }
  isEmpty() {
    return this.props.value === '';
  }
  render() {
    const {
      getClassNames,
      getClassNamesLabel,
      getId,
      isEmpty,
      props: {
        children,
        disabled,
        label,
        name,
        onBlur,
        onChange,
        onDragStart,
        onDrop,
        onFocus,
        value,
      },
    } = this;
    return (
      <div className={getClassNames()} ref={(elementRoot) => { this.elementRoot = elementRoot; }}>
        <select
          className="mdc-select__native-control"
          disabled={disabled}
          id={getId()}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          onDragStart={onDragStart}
          onDrop={onDrop}
          onFocus={onFocus}
          value={value}
        >
          {isEmpty() && <SelectOption disabled label="" value="" />}
          {children}
        </select>
        {/* eslint-disable-next-line jsx-a11y/label-has-for */}
        <label className={getClassNamesLabel()} htmlFor={getId()}>{label}</label>
        <div className="mdc-line-ripple" />
      </div>
    );
  }
}

Select.propTypes = {
  box: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onDragStart: PropTypes.func,
  onDrop: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Select.defaultProps = {
  box: false,
  className: undefined,
  disabled: false,
  id: undefined,
  onBlur: undefined,
  onChange: undefined,
  onDragStart: undefined,
  onDrop: undefined,
  onFocus: undefined,
  value: undefined,
};

export default Select;
