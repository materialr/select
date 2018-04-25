import { shallow } from 'enzyme';
import React from 'react';

import SelectGroup from './group';
import SelectOption from './option';

test('Passes the correct props through', () => {
  const LABEL = 'LABEL';
  const CHILDREN = <SelectOption label="label" value="value" />;
  const wrapper = shallow(
    <SelectGroup label={LABEL}>{CHILDREN}</SelectGroup>,
    { disableLifecycleMethods: true },
  );
  const expectedChildren = CHILDREN;
  const expectedLabel = LABEL;

  const wrapperProps = wrapper.props();
  const actualChildren = wrapperProps.children;
  const actualLabel = wrapperProps.label;

  expect(actualChildren).toBe(expectedChildren);
  expect(actualLabel).toBe(expectedLabel);
});
