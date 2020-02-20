import React from 'react';
import { optionsKnob as options, text } from '@storybook/addon-knobs';

import Heading from './Heading';

export default {
  title: 'Elements/Heading',
  component: Heading,
}

export const BasicHeading = () => {
  return <Heading
    content={text('content', 'Basic Heading')}
  />
};

export const LargeHeading = () => {
  return <Heading
    content={text('content', 'Large Heading')}
    as={text('as', 'h1')}
  />
};

export const SmallHeading = () => {
  return <Heading
    content={text('content', 'Small Heading')}
    as={text('as', 'h6')}
  />
};

export const ResponsiveHeading = () => {
  return <Heading
    content={text('content', 'Dynamic Heading by Tag Changing')}
    as={options(
      'as',
      {
        H1: 'h1',
        H2: 'h2',
        H3: 'h3',
        H4: 'h4',
        H5: 'h5',
        H6: 'h6',
      },
      'h2',
      { display: 'inline-radio' },
    )}
  />
};
