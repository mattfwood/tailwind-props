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

const Template: Story<Props> = args => <Box {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
}

export const Background = Template.bind({});

Background.args = {
  bg: 'red-500'
}

export const TextColor = Template.bind({});

TextColor.args = {
  textColor: 'blue-500'
}

// export const Basic = props => <Box p={1} {...props} />
