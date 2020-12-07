# Tailwind Props

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

## Goals
- Shorten syntax for using tailwind utility classes
- Allow for easily composability
- Keep advantages of purging unused CSS

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