# Tailwind Props

### [Storybook](https://tailwind-props.vercel.app/)

React prop bindings for Tailwind Utility Classes

```jsx
import { Box } from 'tailwind-props';

const Card = () => (
  <Box flex p={2} h={6}>
    Card Content
  </Box>
  // gets turned into
  <div className="flex p-2 h-6">
    Card Content
  </div>
)
```

## Get Started

```bash
yarn install tailwind-props
# or
npm install tailwind-props

# Then install Tailwind dependencies, following these directions if needed:
# https://tailwindcss.com/docs/installation
yarn install tailwindcss
```

### Usage
```css
/* ./styles/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```jsx
// in the root of your app, import your Tailwind styles:
import '../styles/index.css';
import { Box } from 'tailwind-props';

const NavItem = ({ children }) => (
  <Box block px={4} py={2} rounded="md" bg="amber-100" text="amber-700">
    {children}
  </Box>
)

const MenuButton = ({ children }) => (
  <Box as="button" font="sans" rounded="lg" bg="purple-100" textColor="purple-700" px={6} py={2}>
    Check Availability
  </Box>
)
```

## Goals
- Shorten syntax for using tailwind utility classes
- Allow for easily composability
- Leverage Typescript types as much as possible for props
- TODO: Keep advantages of purging unused CSS

## TO DO:

### Figure out how to resolve overlapping utility prop names

In tailwind, this is valid:

```jsx
const Example = () => (
  <div className="flex flex-row flex-wrap">Title</div>
)
```

However, if we try to map these all to the same "flex" prop in React, the last one will overwrite the others:

```jsx
const Example = () => (
  <Box flex flex="row" flex="wrap">Title</Box>
)
/**
 * Passes these props, and loses the others:
 * {
 *  flex: 'wrap'
 * }
*/
```

Probably will require modifications to these utility names, such as:

```jsx
const Example = () => (
  <Box flex flexDirection="row" flexWrap="wrap">Title</Box>
)
```

### Remaining Props:
- [X] Color Utilities
- [X] Text Color
- [X] Background Color
- [X] Font Family
- [X] Font Weight
- [x] Text Align
- [ ] Alignment (justify-content, align-items)
- [ ] Text Transform
- [ ] Border Width
- [ ] Border Color
- [ ] Border Radius
- [ ] Box Shadow
- [ ] Cursor

- [ ] Container

### Create custom PurgeCSS Extractor to optimize for production
