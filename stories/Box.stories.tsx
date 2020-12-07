import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Box, Props } from '../src';

const meta: Meta = {
  title: 'Basic Props',
  component: Box,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<Props> = args => (
  <Box children="This is an example component" font="mono" {...args} />
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};

export const Padding = () => (
  <Box border={1} bg="blue-300" p={6} inlineBlock rounded>
    <Box p={1} font="mono" bg="blue-500" rounded>
      p-6
    </Box>
  </Box>
);

export const Background = Template.bind({});
Background.args = {
  children: 'red-600',
  bg: 'red-600',
  p: 4,
  textColor: 'white',
};

export const TextColor = Template.bind({});
TextColor.args = {
  children: 'blue-500',
  textColor: 'blue-500',
};

export const FontFamily = Template.bind({});
FontFamily.args = {
  children: 'font="serif"',
  font: 'serif',
};

export const FontWeight = Template.bind({});
FontWeight.args = {
  children: 'fontWeight="extrabold"',
  font: 'sans',
  fontWeight: 'extrabold',
};

// <button class="w-1/2 flex items-center justify-center rounded-md bg-black text-white" type="submit">Buy now</button>
// <button type="button" class="bg-violet-100 text-violet-700 text-base font-semibold px-6 py-2 rounded-lg">Check availability</button>

export const AsProp = Template.bind({});
AsProp.args = {
  as: 'button',
  font: 'sans',
  rounded: 'lg',
  bg: 'purple-100',
  textColor: 'purple-700',
  px: 6,
  py: 2,
  children: 'Check Availability',
};

// export const Basic = props => <Box p={1} {...props} />
