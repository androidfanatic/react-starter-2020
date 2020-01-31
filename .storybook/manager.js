import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

const customTheme = create({
  base: 'light',
  brandTitle: 'Customer Lobby',
  brandUrl: 'https://example.com',
  brandImage: 'https://placehold.it/350x150',
});

addons.setConfig({
  theme: customTheme,
});
