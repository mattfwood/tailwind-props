import React from 'react';
import { COLOR_NAMES } from './colorNames';

import './styles.css';
import { forwardRefWithAs } from './utils';

type Color = typeof COLOR_NAMES[number];

export type SizeUnits =
  | 'xs'
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl';

export type FontWeights =
  | 'thin'
  | 'extralight'
  | 'light'
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold'
  | 'black'

/**
 * @see https://tailwindcss.com/docs/display
 */
export type DisplayProps = {
  block?: boolean;
  inlineBlock?: boolean;
  inline?: boolean;
  flex?:
    | boolean
    | 'row'
    | 'col'
    | 'row-reverse'
    | 'col-reverse'
    | 'wrap-reverse'
    | 'wrap'
    | 'nowrap';
  inlineFlex?: boolean;
  table?: boolean;
  grid?: boolean;
  hidden?: boolean;
};

/**
 * @see https://tailwindcss.com/docs/display
 */
export type PositionProps = {
  static?: boolean;
  fixed?: boolean;
  absolute?: boolean;
  relative?: boolean;
  sticky?: boolean;
};

const camelToKebabCase = (string: string): string => {
  return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
};

export interface TailwindProps extends DisplayProps, PositionProps {
  /** Utilities for controlling an element's padding. @see Docs https://tailwindcss.com/docs/padding */
  p?: number;
  /** Utilities for controlling an element's left and right padding. @see Docs https://tailwindcss.com/docs/padding */
  px?: number;
  /** Utilities for controlling an element's top and bottom padding. @see Docs https://tailwindcss.com/docs/padding */
  py?: number;
  /** Utilities for controlling an element's top padding. @see Docs https://tailwindcss.com/docs/padding */
  pt?: number;
  /** Utilities for controlling an element's right padding. @see Docs https://tailwindcss.com/docs/padding */
  pr?: number;
  /** Utilities for controlling an element's bottom padding. @see Docs https://tailwindcss.com/docs/padding */
  pb?: number;
  /** Utilities for controlling an element's left padding. @see Docs https://tailwindcss.com/docs/padding */
  pl?: number;
  /** Utilities for controlling an element's margin. @see Docs https://tailwindcss.com/docs/margin */
  m?: number;
  w?: number;
  h?: number;
  /** Utilities for controlling the font size of an element. @see Docs https://tailwindcss.com/docs/font-size */
  text?: SizeUnits | 'left' | 'right' | 'center' | 'justify';
  border?: number;
  /** Utilities for controlling the text color of an element. @see Docs https://tailwindcss.com/docs/text-color*/
  textColor?: Color;
  fontWeight?: FontWeights
  bg?: Color;
  rounded?: SizeUnits | boolean;
  font?: 'mono' | 'sans' | 'serif';
}

const SPACING_UNITS = ['p', 'm', 'w', 'h'];
const SIZE_UNITS = ['text'];

// since props with the same name override each other, we need to map custom prop names to the correct Tailwind utilities
const OVERRIDES = {
  textColor: 'text',
  fontWeight: 'font',
} as const;

const useTailwindProps = (props?: TailwindProps): string => {
  console.log(props);
  if (!props) {
    return '';
  }

  const classes: string[] = [];

  Object.entries(props).forEach(([key, value]) => {
    const formattedKey = camelToKebabCase(key);
    if (typeof value === 'boolean') {
      classes.push(formattedKey);
    } else if ([...SPACING_UNITS, ...SIZE_UNITS].includes(key)) {
      classes.push([formattedKey, value].join('-'));
    } else if (Object.keys(OVERRIDES).includes(key)) {
      // @ts-ignore
      classes.push([OVERRIDES[key], value].join('-'));
    } else {
      classes.push([formattedKey, value].join('-'));
    }
  });

  const className = classes.join(' ');

  return className;
};

export interface Props extends TailwindProps {
  children?: React.ReactNode;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A base Box component to replace a `<div />`
 */
export const Box = forwardRefWithAs<Props, 'div'>(function Box(
  { children, as: Component = 'div', ...props },
  forwardedRef
) {
  const className = useTailwindProps(props);
  return (
    <Component
      ref={forwardedRef}
      className={className}
      // {...props} @TODO: Figure out how to filter out tailwind props
    >
      {children}
    </Component>
  );
});

export const Flex = forwardRefWithAs<Props, 'div'>(function Flex(
  { children, as: Component = 'div', ...props },
  forwardedRef
) {
  return (
    <Box
      flex
      ref={forwardedRef}
      {...props}
      // {...props} @TODO: Figure out how to filter out tailwind props
    />
  );
});
