import { action } from '@storybook/addon-actions';
import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const Text = () => <Button label={'Hello World 123'} onClick={action('clicked')} />;
