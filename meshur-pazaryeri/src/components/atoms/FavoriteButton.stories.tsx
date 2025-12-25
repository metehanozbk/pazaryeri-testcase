import type { Meta, StoryObj } from '@storybook/react';
import { FavoriteButton } from './FavoriteButton';

const meta: Meta<typeof FavoriteButton> = {
  title: 'Atoms/FavoriteButton',
  component: FavoriteButton,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FavoriteButton>;

export const Default: Story = {
  args: {
    isFavorite: false,
  },
};

export const Active: Story = {
  args: {
    isFavorite: true,
  },
};
