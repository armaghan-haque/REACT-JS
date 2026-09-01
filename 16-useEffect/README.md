import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
  
  const [num, setnum] = useState(0)
  const [num2, setnum2] = useState(100)

  useEffect(function(){
    console.log("useEffect is running")
  }, [num])

  return (
    <div>
        <h1>num {num}</h1>
        <h1>num 2 {num2}</h1>

        <button 
         onMouseEnter={()=>{
            setnum(num + 1)
        }}
         onMouseLeave={()=>{
          setnum2(num2 + 10)
         }}
        >
          Hover
        </button>
    </div>
  )
}

export default App

-----------------------------------------------------------

import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function aChanging() {
    console.log("A is changing...")
  }

  function bChanging() {
    console.log("B is changing...")
  }

  useEffect(function(){
    aChanging()
  },[a])


  useEffect(function(){
    bChanging()
  },[b])


  return (
    <div>
      <h1>A is {a} </h1>
      <h1>B is {b} </h1>
      <button
        onClick={()=>{
          setA(a+1)
        }}
      >change A</button>

      <button
        onClick={()=>{
          setB(b-1)
        }}
      >change B</button>

    </div>
  )
}

export default App


-------------------------------------------------------

# useEffect & Dependency Arrays — Quick Reference

Short definitions for the concepts used in this snippet.

## Core Concepts

**useEffect**
A React Hook that runs "side effects" (like logging, fetching data, or subscriptions) after a component renders. Syntax: `useEffect(callback, dependencyArray)`.

**Dependency array**
The second argument to `useEffect` — an array of values. The effect only re-runs when one of these values changes between renders. `[num]` means "only run this effect when `num` changes."

**Empty dependency array `[]`**
Means the effect runs only once, right after the component's first render (not shown here, but a common variant).

**No dependency array (omitted)**
Means the effect runs after *every* render (also not shown here, but worth knowing).

**useState**
A React Hook for creating local component state. `const [num, setnum] = useState(0)` creates a state variable `num` starting at `0`, and `setnum` to update it.

**onMouseEnter / onMouseLeave**
React event handlers that fire when the mouse pointer enters or leaves an element — used here to trigger state updates on hover.

## What Each Snippet Demonstrates

| Snippet | Behavior |
|---|---|
| 1 | Two state variables (`num`, `num2`) update on hover events, but `useEffect` only logs when `num` changes — `num2` changes are ignored since it's not in the dependency array. |
| 2 | Two separate `useEffect` calls, each watching a different state variable (`a` and `b`). Only the effect tied to the changed variable runs, showing that multiple effects can track different pieces of state independently. |

## Example (Second Snippet Simplified)

```jsx
useEffect(function () {
  console.log("A is changing...")
}, [a])   // runs only when `a` changes

useEffect(function () {
  console.log("B is changing...")
}, [b])   // runs only when `b` changes
```

Clicking "change A" logs `"A is changing..."` only. Clicking "change B" logs `"B is changing..."` only — each effect is isolated to its own dependency.