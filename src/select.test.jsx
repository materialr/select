import * as select from '@material/select';
import { mount, shallow } from 'enzyme';
import React from 'react';

import Select from './index';
import SelectGroup from './group';
import SelectOption from './option';

const CHILDREN = (
  <React.Fragment>
    <SelectGroup label="LABEL">
      <SelectOption label="LABEL" value="VALUE" />
      <SelectOption label="LABEL" value="VALUE" />
    </SelectGroup>
    <SelectOption label="LABEL" value="VALUE" />
  </React.Fragment>
);
const LABEL = 'LABEL';
const NAME = 'NAME';

test('Renders the default classNames', () => {
  const wrapper = shallow(
    <Select label={LABEL} name={NAME}>{CHILDREN}</Select>,
    { disableLifecycleMethods: true },
  );
  const expected = 'mdc-select';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Renders additional classNames based on props', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(
    <Select className={CLASS_NAME} isBox label={LABEL} name={NAME}>{CHILDREN}</Select>,
    { disableLifecycleMethods: true },
  );
  const expected = `mdc-select mdc-select--box ${CLASS_NAME}`;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Renders the native select', () => {
  const wrapper = shallow(
    <Select label={LABEL} name={NAME}>{CHILDREN}</Select>,
    { disableLifecycleMethods: true },
  );
  const expected = 'mdc-select__native-control';

  const actual = wrapper.find('select').props().className;

  expect(actual).toBe(expected);
});

test('Renders the disabled component and select', () => {
  const wrapper = shallow(
    <Select disabled label={LABEL} name={NAME}>{CHILDREN}</Select>,
    { disableLifecycleMethods: true },
  );
  const expectedClassName = 'mdc-select mdc-select--disabled';
  const expectedDisabled = true;

  const actualClassName = wrapper.props().className;
  const actualDisabled = wrapper.find('select').props().disabled;

  expect(actualClassName).toBe(expectedClassName);
  expect(actualDisabled).toBe(expectedDisabled);
});

test('Passes the id to the select and the label', () => {
  const ID = 'ID';
  const wrapper = shallow(
    <Select id={ID} label={LABEL} name={NAME}>{CHILDREN}</Select>,
    { disableLifecycleMethods: true },
  );
  const expectedLabel = ID;
  const expectedSelect = ID;

  const actualLabel = wrapper.find('label').props().htmlFor;
  const actualSelect = wrapper.find('select').props().id;

  expect(actualLabel).toBe(expectedLabel);
  expect(actualSelect).toBe(expectedSelect);
});

test('Generates a unique id per instance if none is given', () => {
  const wrapperOne = shallow(
    <Select label={LABEL} name={NAME}>{CHILDREN}</Select>,
    { disableLifecycleMethods: true },
  );
  const wrapperTwo = shallow(
    <Select label={LABEL} name={NAME}>{CHILDREN}</Select>,
    { disableLifecycleMethods: true },
  );

  const actualIdOne = wrapperOne.find('select').props().id;
  const actualIdTwo = wrapperTwo.find('select').props().id;

  expect(actualIdOne).not.toBe(actualIdTwo);
});

test('Renders an empty option', () => {
  const wrapper = shallow(
    <Select label={LABEL} name={NAME} onChange={() => {}} value="">{CHILDREN}</Select>,
    { disableLifecycleMethods: true },
  );
  const expectedClassName = 'mdc-select__label';
  const expectedDisabled = true;
  const expectedLabel = '';
  const expectedValue = '';

  const firstOptionProps = wrapper.find(SelectOption).at(0).props();
  const actualClassName = wrapper.find('label').props().className;
  const actualDisabled = firstOptionProps.disabled;
  const actualLabel = firstOptionProps.label;
  const actualValue = firstOptionProps.value;

  expect(actualClassName).toBe(expectedClassName);
  expect(actualDisabled).toBe(expectedDisabled);
  expect(actualLabel).toBe(expectedLabel);
  expect(actualValue).toBe(expectedValue);
});

test('Renders a label with the correct classNames', () => {
  const wrapper = shallow(
    <Select label={LABEL} name={NAME}>{CHILDREN}</Select>,
    { disableLifecycleMethods: true },
  );
  const expected = 'mdc-select__label mdc-select__label--float-above';

  const actual = wrapper.find('label').props().className;

  expect(actual).toBe(expected);
});

test('Always renders the bottom line', () => {
  const wrapper = shallow(
    <Select label={LABEL} name={NAME}>{CHILDREN}</Select>,
    { disableLifecycleMethods: true },
  );
  const expected = true;

  const actual = wrapper.find('.mdc-select__bottom-line').exists();

  expect(actual).toBe(expected);
});

test('Passes through the correct props', () => {
  const ON_BLUR = () => 'ON_BLUR';
  const ON_CHANGE = () => 'ON_CHANGE';
  const ON_DRAG_START = () => 'ON_DRAG_START';
  const ON_DROP = () => 'ON_DROP';
  const ON_FOCUS = () => 'ON_FOCUS';
  const VALUE = 'VALUE';
  const wrapper = shallow(
    <Select
      label={LABEL}
      name={NAME}
      onBlur={ON_BLUR}
      onChange={ON_CHANGE}
      onDragStart={ON_DRAG_START}
      onDrop={ON_DROP}
      onFocus={ON_FOCUS}
      value={VALUE}
    >
      {CHILDREN}
    </Select>,
    { disableLifecycleMethods: true },
  );
  const expectedName = NAME;
  const expectedOnBlur = ON_BLUR;
  const expectedOnChange = ON_CHANGE;
  const expectedOnDragStart = ON_DRAG_START;
  const expectedOnDrop = ON_DROP;
  const expectedOnFocus = ON_FOCUS;
  const expectedValue = VALUE;

  const inputProps = wrapper.find('select').props();
  const actualName = inputProps.name;
  const actualOnBlur = inputProps.onBlur;
  const actualOnChange = inputProps.onChange;
  const actualOnDragStart = inputProps.onDragStart;
  const actualOnDrop = inputProps.onDrop;
  const actualOnFocus = inputProps.onFocus;
  const actualValue = inputProps.value;

  expect(actualName).toBe(expectedName);
  expect(actualOnBlur).toBe(expectedOnBlur);
  expect(actualOnChange).toBe(expectedOnChange);
  expect(actualOnDragStart).toBe(expectedOnDragStart);
  expect(actualOnDrop).toBe(expectedOnDrop);
  expect(actualOnFocus).toBe(expectedOnFocus);
  expect(actualValue).toBe(expectedValue);
});

test('Creates the MDCSelect component on mount', () => {
  const MDCSelect = jest.fn();
  select.MDCSelect = MDCSelect;
  const wrapper = mount(<Select label={LABEL} name={NAME}>{CHILDREN}</Select>);
  const instance = wrapper.instance();
  const expected = instance.elementRoot;

  const actual = MDCSelect.mock.calls[0][0];

  expect(actual).toBe(expected);
});

test('Destroys the MDCSelect component on unmount', () => {
  const destroy = jest.fn();
  const wrapper = mount(<Select label={LABEL} name={NAME}>{CHILDREN}</Select>);
  const instance = wrapper.instance();
  const expected = 1;
  instance.select.destroy = destroy;

  wrapper.unmount();
  const actual = destroy.mock.calls.length;

  expect(actual).toBe(expected);
});
