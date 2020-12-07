import React, { FC, HTMLAttributes, ReactChild } from 'react';
import './styles.css';

export interface TailwindProps {
  /** Utilities for controlling an element's padding. @see Docs https://tailwindcss.com/docs/padding */
  p?: number;
  /** Utilities for controlling an element's margin. @see Docs https://tailwindcss.com/docs/margin */
  m?: number;
  w?: number;
  h?: number;
  /** Utilities for controlling the font size of an element. @see Docs https://tailwindcss.com/docs/font-size */
  text?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl'
}

export interface Props extends HTMLAttributes<HTMLDivElement>, TailwindProps {
  children?: ReactChild;
}

const SPACING_UNITS = ['p', 'm', 'w', 'h'];
const SIZE_UNITS = ['text'];

const useTailwindProps = (props?: TailwindProps): string => {
  console.log(props);
  if (!props) {
    return '';
  }

  const classes: string[] = []

  Object.entries(props).forEach(([key, value]) => {
    if (SPACING_UNITS.includes(key)) {
      classes.push([key, value].join('-'))
    }

    if (SIZE_UNITS.includes(key)) {
      classes.push([key, value].join('-'))
    }
  });

  const className = classes.join(' ');

  return className;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Box component. Neat!
 */
export const Box: FC<Props> = ({ children, ...props }) => {
  console.log({ props })
  const className = useTailwindProps(props);
  return <div className={className}>{children || `the snozzberries taste like snozzberries`}</div>;
};
