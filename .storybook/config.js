import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import themeDecorator from '../src/utils/themeDecorator';

addDecorator(themeDecorator);
addDecorator(withKnobs);
