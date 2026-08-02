# README.md

````markdown
# React.js Basics

## What is React.js?

React.js is a JavaScript library used for building fast and interactive user interfaces, especially for Single Page Applications (SPAs).

It was developed by Facebook.

React allows developers to create reusable UI components, which makes the code easier to manage and maintain.

It uses a Virtual DOM to improve performance by updating only the required parts of the webpage instead of reloading the entire page.

---

# SPA (Single Page Application)

SPA (Single Page Application) is a web application where only one page is loaded initially, and the content changes dynamically without reloading the entire page.

It provides a faster and smoother user experience.

---

# MPA (Multi Page Application)

MPA (Multi Page Application) is a traditional web application where every action loads a new page from the server.

Each page has its own HTML file, so navigation usually requires a full page reload.

---

# Real DOM

The Real DOM is the actual structure of a webpage created by the browser.

Whenever there is a change in the UI, the browser updates the entire DOM, which can be slower for large applications.

It represents elements like headings, buttons, images, and paragraphs that JavaScript can interact with.

---

# Virtual DOM

The Virtual DOM is a lightweight copy of the Real DOM used by React.

When a change happens, React first updates the Virtual DOM, compares it with the previous version, finds only the changes, and then updates only those parts in the Real DOM.

This makes React applications faster and more efficient.

---

# Library vs Framework

## Library

A library is a collection of pre-written code that developers can use to perform specific tasks.

The developer controls the flow of the application and decides when and where to use the library.

## Framework

A framework is a complete structure that provides a set of rules and tools to build an application.

The framework controls the flow of the application, and developers follow the framework's structure.

### Main Difference

In a library, we call the code when needed.

In a framework, the framework calls our code.

---

# Export and Import

Export and Import are JavaScript keywords used to share and reuse code between different files.

## Export

Export is used to send a function, variable, or component from one file so that other files can use it.

## Import

Import is used to bring that exported code into another file.

---

# Types of Exports

## 1. Named Export

Used when we want to export multiple items.

We must use the same name while importing.

### `app.js`

```javascript
const arr = [10,20,30,40]

export const user = "arman"   // named export
export default arr
```

### `script.js`

```javascript
import { user } from "./app.js"   // use the same name while importing

console.log(user)
```

---

## 2. Default Export

Used when we want to export a single item.

We can use any name while importing.

### `app.js`

```javascript
const arr = [10,20,30,40]

const user = "arman"

export default arr
```

### `script.js`

```javascript
import name from "./app.js"   // can use any name while importing

console.log(name)
```

---

# JSX

JSX stands for JavaScript XML.

It is a syntax extension of JavaScript used in React to write HTML-like code inside JavaScript.

---

# How to Call a Function in JSX

```javascript
function Hero() {
    console.log("hello guys")
}

<Hero />

Hero()
```

---

# Fragments in React

Fragments in React are used to group multiple elements together without adding an extra HTML element to the DOM.

Normally, a React component can return only one parent element.

Using a Fragment, we can return multiple elements without creating unnecessary `<div>` elements.

## Example

```jsx
function App() {
  return (
    <>
      <h1>Hello</h1>
      <p>Welcome to React</p>
    </>
  );
}
```
````
