import React from 'react';
import { SizeUnits, Color } from './types';

import { forwardRefWithAs } from './utils';

export enum FontWeightValues {
  'thin' = 'thin',
  'extralight' = 'extralight',
  'light' = 'light',
  'normal' = 'normal',
  'medium' = 'medium',
  'semibold' = 'semibold',
  'bold' = 'bold',
  'extrabold' = 'extrabold',
  'black' = 'black',
}

/**
 * @see https://tailwindcss.com/docs/font-weight
 */
export type FontWeight = keyof typeof FontWeightValues

// export type FontWeight =
//   | 'thin'
//   | 'extralight'
//   | 'light'
//   | 'normal'
//   | 'medium'
//   | 'semibold'
//   | 'bold'
//   | 'extrabold'
//   | 'black';

export type OverflowValue = 'auto' | 'hidden' | 'visible' | 'scroll'

/**
 * @see https://tailwindcss.com/docs/display
 */
export type LayoutProps = {
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
    | 'nowrap'
    | 'none';
  inlineFlex?: boolean;
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  table?: boolean;
  grid?: boolean;
  hidden?: boolean;
  overflow?: OverflowValue;
  overflowX?: OverflowValue;
  overflowY?: OverflowValue;
};

export type AlignmentProps = {
  justify?: | 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly' | string
  items?: 'stretch' | 'start' | 'center' | 'end' | 'baseline' | string
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
};

// export type SpacingProps

/**
 * @see https://tailwindcss.com/docs/customizing-spacing
 */
export type SpacingValues = number | 'auto' | 'px' | string

const camelToKebabCase = (string: string): string => {
  return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
};

export interface TailwindProps extends LayoutProps, PositionProps, AlignmentProps {
  /** Utilities for controlling an element's padding. @see Docs https://tailwindcss.com/docs/padding */
  p?: SpacingValues;
  /** Utilities for controlling an element's left and right padding. @see Docs https://tailwindcss.com/docs/padding */
  px?: SpacingValues;
  /** Utilities for controlling an element's top and bottom padding. @see Docs https://tailwindcss.com/docs/padding */
  py?: SpacingValues;
  /** Utilities for controlling an element's top padding. @see Docs https://tailwindcss.com/docs/padding */
  pt?: SpacingValues;
  /** Utilities for controlling an element's right padding. @see Docs https://tailwindcss.com/docs/padding */
  pr?: SpacingValues;
  /** Utilities for controlling an element's bottom padding. @see Docs https://tailwindcss.com/docs/padding */
  pb?: SpacingValues;
  /** Utilities for controlling an element's left padding. @see Docs https://tailwindcss.com/docs/padding */
  pl?: SpacingValues;
  /** Utilities for controlling an element's margin. @see Docs https://tailwindcss.com/docs/margin */
  m?: SpacingValues;
  mx?: SpacingValues;
  /** Utilities for controlling an element's top and bottom margin. @see Docs https://tailwindcss.com/docs/margin */
  my?: SpacingValues;
  /** Utilities for controlling an element's top margin. @see Docs https://tailwindcss.com/docs/margin */
  mt?: SpacingValues;
  /** Utilities for controlling an element's right margin. @see Docs https://tailwindcss.com/docs/margin */
  mr?: SpacingValues;
  /** Utilities for controlling an element's bottom margin. @see Docs https://tailwindcss.com/docs/margin */
  mb?: SpacingValues;
  /** Utilities for controlling an element's left margin. @see Docs https://tailwindcss.com/docs/margin */
  ml?: SpacingValues;
  /** Utilities for controlling an element's margin. @see Docs https://tailwindcss.com/docs/margin */

  w?: number;
  h?: number;
  maxW?: SizeUnits;
  maxH?: SizeUnits;
  /** Utilities for controlling the font size of an element. @see Docs https://tailwindcss.com/docs/font-size */
  text?: SizeUnits;
  border?: number | boolean;
  borderColor?: Color | 'current' | 'transparent';
  /** Utilities for controlling the text color of an element. @see Docs https://tailwindcss.com/docs/text-color*/
  textColor?: Color;
  textAlign?: 'left' | 'right' | 'center' | 'justify' | string;
  fontWeight?: FontWeight;
  bg?: Color;
  shadow?: SizeUnits | boolean | 'inner' | 'none';
  rounded?: SizeUnits | boolean;
  font?: 'mono' | 'sans' | 'serif';
}

const SPACING_UNITS = ['p', 'm', 'w', 'h', 'px', 'py', 'pt', 'pb', 'pl', 'pr', 'mx', 'my', 'mt', 'mr', 'mb','ml'];
const SIZE_UNITS = ['text'];
const COLOR_PROPS = ['bg'];
const FONT_PROPS = ['font'];
const BORDER_PROPS = ['rounded', 'shadow']
const ALIGNMENT_PROPS = ['justify', 'items']
const LAYOUT_PROPS = ['overflow', 'overflowX', 'overflowY']

export const TAILWIND_PROPS = [...SPACING_UNITS, ...SIZE_UNITS, ...COLOR_PROPS, ...FONT_PROPS, ...BORDER_PROPS, ...ALIGNMENT_PROPS, ...LAYOUT_PROPS]

// since props with the same name override each other, we need to map custom prop names to the correct Tailwind utilities
const OVERRIDES = {
  textColor: 'text',
  textAlign: 'text',
  fontWeight: 'font',
  flexDirection: 'flex',
  borderColor: 'border',
} as const;

export const useTailwindProps = (props?: TailwindProps): [string, any] => {
  if (!props) {
    return ['', {}];
  }

  const classes: string[] = [];
  let excludedProps: any = {};

  Object.entries(props).forEach(([key, value]) => {
    const formattedKey = camelToKebabCase(key);
    if (typeof value === 'boolean') {
      classes.push(formattedKey);
    } else if (TAILWIND_PROPS.includes(key)) {
      classes.push([formattedKey, value].join('-'));
    } else if (Object.keys(OVERRIDES).includes(key)) {
      // @ts-ignore
      classes.push([OVERRIDES[key], value].join('-'));
    } else {
      // if the prop isn't one that we've listed, append it to the excluded props to pass down to the element
      excludedProps = { ...excludedProps, [key]: value }
    }
  });

  const className = classes.join(' ');

  return [className, excludedProps];
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
  const [className, excludedProps] = useTailwindProps(props);
  return (
    <Component
      ref={forwardedRef}
      className={className}
      {...excludedProps}
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
