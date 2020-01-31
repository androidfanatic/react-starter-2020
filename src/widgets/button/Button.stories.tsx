import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
  decorators: [withInfo],
};

export const Text = () => <Button label={'Get Reviews'} onClick={action('clicked')} />;
