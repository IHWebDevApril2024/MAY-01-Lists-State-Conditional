# React lists, state and conditional rendering

## Lists

In react, when we have an array of elements that we want to render, we can use the `map` function to iterate over the array and render each element.

```jsx
const numbers = [1, 2, 3, 4, 5];

const MyComponent = () => {
  return (
    <ul>
      {numbers.map((number) => (
        <li key={number}>{number}</li>
      ))}
    </ul>
  );
};
```

In the example above, we have an array of numbers that we want to render as a list. We use the `map` function to iterate over the array and render each number as a list item.

When we have an array of elements that we want to render conditionally, we can use the `filter` function to filter the array based on a condition and then render the filtered elements.

```jsx
const numbers = [1, 2, 3, 4, 5];

const MyComponent = () => {
  return (
    <ul>
      {numbers
        .filter((number) => number % 2 === 0)
        .map((number) => (
          <li key={number}>{number}</li>
        ))}
    </ul>
  );
};
```

OH MY GOD! This is so cool! I can't believe I didn't know this before! I'm going to use this in all my projects from now on! This is amazing! I love React! 😎

## Hooks

In React, hooks are functions that let you use state and other React features in functional components. The most commonly used hooks are `useState` and `useEffect`.

### useState

The `useState` hook allows you to add state to functional components. It takes an initial value as an argument and returns an array with two elements: the current state value and a function to update the state.

```jsx
import { useState } from "react";

const MyComponent = () => {
  const [count, setCount] = useState(0);
  // and the rest of the component
};
```

In the example above, we use the `useState` hook to add a count state to the component with an initial value of `0`. The `count` variable holds the current state value, and the `setCount` function is used to update the state.

Every time we use the `setCount` function to update the state, React will re-render the component with the new state value. That doesn't mean we are changing the value of the variable `count`, we are changing the state of the component.

We are going to see the `useEffect` hook in the next lessons.

## Conditional rendering

The conditional rendering is when we render different elements based on a condition. We can use the `if` statement, the ternary operator, or the logical `&&` operator to conditionally render elements in React.

### If statement

```jsx
const MyComponent = (props) => {
  if (props.isLoggedIn) {
    return <p>Welcome, user!</p>;
  } else {
    return <p>Please log in to continue.</p>;
  }
};
```
### Ternary operator

```jsx
const MyComponent = (props) => {
  return props.isLoggedIn ? <p>Welcome, user!</p> : <p>Please log in to continue.</p>;
};
```

### Logical && operator

```jsx
const MyComponent = (props) => {
  return props.isLoggedIn && <p>Welcome, user!</p>;
};
```
In this case, if the `isLoggedIn` prop is `true`, the paragraph element will be rendered. If the `isLoggedIn` prop is `false`, nothing will be rendered.

That's it for today! 💪😎