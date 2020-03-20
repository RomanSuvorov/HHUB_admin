import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';

import Input from './Input';

export default {
  title: 'Elements/Input',
  component: Input,
}

export const BasedInput = () => {
  return <Input
    label={text('label', 'Based Text Input')}
  />
};

export const InputWithInfo = () => {
  return <Input
    label={text('label', 'Input With Info Text')}
    infoMessage={text('infoMessage', 'Info Message')}
  />
};

export const ReadOnlyInput = () => {
  return <Input
    label={text('label', 'Read Only Input')}
    value={text('value', 'Some value')}
    readOnly={boolean('readOnly', true)}
  />
};

export const DisableInput = () => {
  return <Input
    label={text('label', 'Disable Input')}
    value={text('value', 'Some value')}
    disable={boolean('disable', true)}
  />
};

export const InputWithError = () => {
  return <Input
    label={text('label', 'Input With Error')}
    value={text('value', 'Some value')}
    errorMessage={text('errorMessage', 'Invalid value')}
  />
};

export const ActionInput = () => {
  return <Input
    label={text('label', 'Action Input')}
    value={text('value', 'Some value')}
    onChange={action('onChange')}
  />
};

export const DynamicInputProps = () => {
  return <Input
    label={text('label', 'Dynamic Input Props')}
    value={text('value', '')}
    infoMessage={text('infoMessage', 'Info Message')}
    errorMessage={text('errorMessage', 'Invalid value')}
    disable={boolean('disable', false)}
    readOnly={boolean('readOnly', false)}
  />
};
