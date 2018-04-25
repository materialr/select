import { shallow } from 'enzyme';
import React from 'react';

import SelectOption from './option';

test('Passes the correct props through', () => {
  const DISABLED = true;
  const LABEL = 'LABEL';
  const VALUE = 'VALUE';
  const wrapper = shallow(
    <SelectOption disabled={DISABLED} label={LABEL} value={VALUE} />,
    { disableLifecycleMethods: true },
  );
  const expectedDisabled = DISABLED;
  const expectedLabel = LABEL;
  const expectedValue = VALUE;

  const wrapperProps = wrapper.props();
  const actualDisabled = wrapperProps.disabled;
  const actualLabel = wrapperProps.children;
  const actualValue = wrapperProps.value;

  expect(actualDisabled).toBe(expectedDisabled);
  expect(actualLabel).toBe(expectedLabel);
  expect(actualValue).toBe(expectedValue);
});
