import React, { FC, HTMLAttributes, ReactChild } from 'react';
import { COLOR_NAMES } from './colorNames';

import './styles.css';

type Color = typeof COLOR_NAMES[number];

export type SizeUnits = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';

/**
 * @see https://tailwindcss.com/docs/display
 */
export type DisplayProps = {
  block?: boolean;
  inlineBlock?: boolean;
  inline?: boolean;
  flex?: boolean | 'row' | 'col' | 'row-reverse' | 'col-reverse' | 'wrap-reverse' | 'wrap' | 'nowrap';
  inlineFlex?: boolean;
  table?: boolean;
  grid?: boolean;
  hidden?: boolean;
}

/**
 * @see https://tailwindcss.com/docs/display
 */
export type PositionProps = {
  static?: boolean;
  fixed?: boolean;
  absolute?: boolean;
  relative?: boolean;
  sticky?: boolean;
}

const camelToKebabCase = (string: string): string => {
    return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
};

export interface TailwindProps extends DisplayProps, PositionProps {
  /** Utilities for controlling an element's padding. @see Docs https://tailwindcss.com/docs/padding */
  p?: number;
  /** Utilities for controlling an element's margin. @see Docs https://tailwindcss.com/docs/margin */
  m?: number;
  w?: number;
  h?: number;
  /** Utilities for controlling the font size of an element. @see Docs https://tailwindcss.com/docs/font-size */
  text?: SizeUnits | 'left' | 'right' | 'center' | 'justify'
  /** Utilities for controlling the text color of an element. @see Docs https://tailwindcss.com/docs/text-color*/
  textColor?: Color;
  bg?: Color;
}

export interface Props extends HTMLAttributes<HTMLDivElement>, TailwindProps {
  children?: ReactChild;
}

const SPACING_UNITS = ['p', 'm', 'w', 'h'];
const SIZE_UNITS = ['text'];

// since props with the same name override each other, we need to map custom prop names to the correct Tailwind utilities
const OVERRIDES = {
  textColor: 'text',
} as const;

const useTailwindProps = (props?: TailwindProps): string => {
  console.log(props);
  if (!props) {
    return '';
  }

  const classes: string[] = []

  Object.entries(props).forEach(([key, value]) => {
    if (typeof value === 'boolean') {
      classes.push(camelToKebabCase(key));
    } else if ([...SPACING_UNITS, ...SIZE_UNITS].includes(key)) {
      classes.push([key, value].join('-'))
    } else if (Object.keys(OVERRIDES).includes(key)) {
      // @ts-ignore
      classes.push([OVERRIDES[key], value].join('-'))
    } else {
      classes.push([key, value].join('-'))
    }
  });

  const className = classes.join(' ');

  return className;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A base Box component to replace a `<div />`
 */
export const Box: FC<Props> = ({ children, ...props }) => {
  const className = useTailwindProps(props);
  return <div className={className}>{children || `the snozzberries taste like snozzberries`}</div>;
};

export const Flex: FC<Props> = ({ children, ...props }) => {
  return <Box flex {...props} />
}
