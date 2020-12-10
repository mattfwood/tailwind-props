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

## Why does this exist?
While TailwindCSS on its own works perfectly well with React, there are a few ways it could be improved to better fit the React model.

<!--ts-->
   * [Easier Composability](#easier-composability)
   * [Simplifying Syntax](#simplifying-syntax)
   * [Typescript](#typescript)
<!--te-->

### Easier Composability
The biggest limitation of TailwindCSS on its own is that it relies entirely on strings for an element's `class`.

While you can extract styles within Tailwind, the common React pattern for this is using objects and defaults to compose similar elements.

```jsx
// default TailwindCSS (without using @apply to extract)
const BaseButton = ({ className }) => (
  // string concatenation this way is more fragile than merging objects and will also cause duplicate classNames to be added
  <button className={`px-5 py-3 rounded-md text-white bg-indigo-600 ${className}`}>
    Primary Button
  </button>
)

const SecondaryButton = () => (
  <BaseButton className="text-indigo-600 bg-white border border-indigo-600">
    Secondary Button
  </BaseButton>
)


// Using Tailwind Props
const BaseButton = (props) => (
  // pass down all props to allow additional styles to be merged in
  <Button px={5} py={3} rounded="md" text="white" bg="indigo-600" {...props}>
    Primary Button
  </Button>
)

const SecondaryButton = () => (
  // pass down props to override base button styles
  <BaseButton text="indigo-600" bg="white" border="indigo-600" >
    Secondary Button
  </BaseButton>
)

```

### Simplifying Syntax
Since we're (currently) stuck typing out `className` in React, it can make tailwind a bit clunkier.

By mapping out Tailwind utilities to props, we can simplify the syntax a good amount:

```jsx
// vanilla tailwind
<button className="px-5 py-3 rounded-md">
  Click Here
</button>
// Tailwind Props
<Button px={5} py={3} rounded="md">
  Click Here
</Button>
```

### Typescript

## TO DO:
### (From Highest to Lowest Priority)

### Figure out approach for pseudo classes / states (:hover, :active, :disabled) and responsive styles

### Create custom PurgeCSS Extractor to optimize for production
Will require a custom PurgeCSS extractor / function

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
