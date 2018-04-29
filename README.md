# MaterialR Select

**@materialr/select**

[![Build Status](https://travis-ci.org/materialr/select.svg?branch=master)](https://travis-ci.org/materialr/select)
[![Coverage Status](https://coveralls.io/repos/github/materialr/select/badge.svg?branch=master)](https://coveralls.io/github/materialr/select?branch=master)
[![NSP Status](https://nodesecurity.io/orgs/materialr/projects/73fe3ede-349e-4f01-850c-95bf054da34a/badge)](https://nodesecurity.io/orgs/materialr/projects/73fe3ede-349e-4f01-850c-95bf054da34a)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

React Material select implementation.

## Installation

```sh
$ npm install --save @materialr/select
```

## Demo

A full demo is available on the [MaterialR website](https://materialr.github.io/components/select)
showcasing all variants.

## Components

### Default export

```js
import Select from '@materialr/select';
```

**Props**

| Prop          | Type   | Required | Default    | Description                                    |
| ------------- | ------ | -------- | ---------- | ---------------------------------------------- |
| `box`         | bool   | No       | false      | Whether to render with a box style             |
| `children`    | node   | Yes      | N/A        | The child elements to render inside the select |
| `className`   | string | No       | undefined  | Additional classNames to add                   |
| `disabled`    | bool   | No       | false      | Whether to render a disabled select            |
| `id`          | string | No       | `uuidv1()` | The id for the select element                  |
| `name`        | string | No       | undefined  | The name attribute of the select element       |
| `onBlur`      | func   | No       | undefined  | The `blur` event handler                       |
| `onChange`    | func   | No       | undefined  | The `change` event handler                     |
| `onDragStart` | func   | No       | undefined  | The `dragstart` event handler                  |
| `onDrop`      | func   | No       | undefined  | The `drop` event handler                       |
| `onFocus`     | func   | No       | undefined  | The `focus` event handler                      |
| `value`       | string | No       | undefined  | The selected value                             |

### Named exports

```js
import { SelectGroup } from '@materialr/select';
```

**Props**

| Prop       | Type        | Required | Default | Description                                   |
| ---------- | ----------- | -------- | ------- | --------------------------------------------- |
| `children` | node/[node] | Yes      | N/A     | The child elements to render inside the group |
| `label`    | string      | Yes      | N/A     | The label to display for the group            |

```js
import { SelectOption } from '@materialr/select';
```

**Props**

| Prop       | Type          | Required | Default | Description                        |
| ---------- | ------------- | -------- | ------- | ---------------------------------- |
| `disabled` | bool          | No       | false   | Whether the option is disabled     |
| `label`    | string        | Yes      | N/A     | The label to display for the group |
| `value`    | number/string | Yes      | N/A     | The value for the option           |
