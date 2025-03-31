### Questions Part 1

1. What is the return type of the component?

Object - Symbol(react.element)

```javascript
Object
  $$typeof: Symbol(react.element)
  key: null
  props: {children: 'Hello World'}
  ref: null
  type: "h2"
  _owner: FiberNode {tag: 0, key: null, stateNode: null, elementType: ƒ, type: ƒ, …}
  _store: {
    validated: false
  }
  _self: undefined
  _source: {
    fileName: 'C:\\Users\\FredJ\\Downloads\\ts-fundamentals-main\\ts-f…amentals-main\\src\\components\\MyFirstComponent.tsx',
    lineNumber: 2,
    columnNumber: 10
  }
  [[Prototype]]: Object
```

2. What was different about the filename of the component compared to the non component functions?

3. Why is this called a stateless component? What would stop it being a stateless component?

### Questions Part 2

1. How is this different to non-TS javascript?

### Questions Part 3

1. How did you verify the element was there?

2. Why does the screen object have so many methods, what do they all do?

### Questions Part 4

1. What happens the first time you run the snapshot testing?

- A `__snapshot__` folder was created, inside this folder a file containing my rendered component

2. What happens the 2nd time?

- No new snapshot is created

3. Change the component to return an H3 instead of an H2 and see what happens?

- Snapshot Summary › 1 snapshot failed from 1 test suite. Inspect your code changes or press `u` to update them.

4. What could be the potential danger of this approach?
