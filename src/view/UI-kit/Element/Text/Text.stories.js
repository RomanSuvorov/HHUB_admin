import React from 'react';
import { optionsKnob as options, text } from '@storybook/addon-knobs';

import Text from './Text';

export default {
  title: 'Elements/Text',
  component: Text,
}

export const BasicText = () => {
  return <Text content={text('content', 'Basic Text')} />
};

export const ResponsiveText = () => {
  return <Text
    content={text('content', 'Responsive Text')}
    as={options(
      'as',
      {
        Span: 'span',
        Paragraph: 'p',
      },
      'p',
      { display: 'inline-radio' },
    )}
  />
};
