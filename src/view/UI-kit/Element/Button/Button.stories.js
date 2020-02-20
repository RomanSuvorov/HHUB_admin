import React from 'react';
import { action } from '@storybook/addon-actions';
import { optionsKnob as options, boolean, text } from '@storybook/addon-knobs';

import Button from './Button';
import { ArrowRight } from '../../../../assets/iconComponents';

export default {
  title: 'Elements/Button',
  component: Button,
}

export const DefaultButton = () => {
  return <Button
    label={text('label','Default Button')}
    type={text('type','button')}
  />
};

export const DisabledButton = () => {
  return <Button
    label={text('label','Disabled Button')}
    disabled={boolean('disabled', true)}
    type={text('type','button')}
  />
};

export const InversedColorButton = () => {
  return <Button
    label={text('label','Inverse Color Button')}
    inverseColor={boolean('inverseColor', true)}
    type={text('type','button')}
  />
};

export const BorderredButton = () => {
  return <Button
    label={text('label','Bordered Button')}
    bordered={boolean('bordered', true)}
    type={text('type','button')}
  />
};

export const ButtonWithIcon = () => {
  return <Button
    label={text('label', 'Button With Icon')}
    iconPosition={options('iconPosition', { Left: 'left', Right: 'right' }, 'right', { display: 'inline-radio' })}
    icon={<ArrowRight />}
    bordered={boolean('bordered', false)}
    inverseColor={boolean('inverseColor', true)}
    type={text('type', 'button')}
  />
};

export const ActionButton = () => {
  return <Button
    label={text('label','Action Button')}
    type={text('type','button')}
    onClick={action('onClickButton')}
  />
};
