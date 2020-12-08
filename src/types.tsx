import { COLOR_NAMES } from './colorNames';

export type Color = typeof COLOR_NAMES[number];

export type SizeUnits = 'xs' |
  'sm' |
  'base' |
  'lg' |
  'xl' |
  '2xl' |
  '3xl' |
  '4xl' |
  '5xl' |
  '6xl' |
  '7xl' |
  '8xl' |
  '9xl';
