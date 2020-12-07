import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Box, Props } from '../src';

const meta: Meta = {
  title: 'Box',
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

const Template: Story<Props> = args => <Box children="This is an example component" font="mono" {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
}

export const Padding = () => (
  <Box border={1} bg="blue-300" p={6} inlineBlock rounded>
    <Box p={1} font="mono" bg="blue-500" rounded>
      p-6
    </Box>
  </Box>
)
// Padding.args = {
//   children: 'Padding',
//   p: 5
// }

export const Background = Template.bind({});
Background.args = {
  children: 'red-600',
  bg: 'red-600',
  p: 4,
  textColor: 'white'
}

export const TextColor = Template.bind({});
TextColor.args = {
  children: 'blue-500',
  textColor: 'blue-500'
}

// export const Basic = props => <Box p={1} {...props} />
