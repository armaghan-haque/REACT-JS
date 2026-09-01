# Fetching Data in React — Quick Reference

Short definitions for the concepts used in this snippet, progressing from raw `fetch` to `axios` with destructuring and state.

## Core Concepts

**fetch()**
Built-in browser API for making HTTP requests. Returns a `Promise` that resolves to a `Response` object — you must call `.json()` on it separately to get the actual data.

**async / await**
Syntax for writing asynchronous code that looks synchronous. `async` marks a function as asynchronous; `await` pauses execution until a `Promise` resolves.

**response.json()**
A method on the `Response` object (from `fetch`) that parses the response body as JSON and returns another `Promise`. Needs its own `await`.

**axios**
A third-party HTTP client library (installed via `npm i axios`) that simplifies requests compared to `fetch` — for example, it automatically parses JSON, so there's no separate `.json()` step.

**axios response object**
Unlike `fetch`, axios wraps the actual data inside a `response.data` property, alongside other info like headers and status.

**Destructuring**
A JavaScript syntax that lets you extract values directly from an object. `const { data } = await axios.get(...)` pulls out `data` directly instead of writing `response.data` every time.

**useState**
A React Hook that lets a component hold and update local state. `const [data, setdata] = useState([])` creates a state variable (`data`) starting as an empty array, and a function (`setdata`) to update it.

**.map()**
An array method used here to loop over fetched data and render a piece of UI (`<h3>`) for each item.

## Progression Shown in the Snippets

| Step | What Changes |
|---|---|
| 1 | Basic `fetch`, but only logs the raw `Response` object (not the data) |
| 2 | Adds `await response.json()` to actually get usable data |
| 3 | Switches to `axios`, using `response.data` instead of `.json()` |
| 4 | Uses destructuring to pull `data` directly out of the axios response |
| 5 | Stores fetched data in component state with `useState` and renders it in the UI |


------------------------------------------------------------

import React from 'react'

const App = () => {
  
  async function getData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
     
    console.log(response)
  }
  
  return (
    <div>
      <button onClick={getData}>Get Data</button>
    </div>
  )
}

export default App

-----------------------------------------------------------

import React from 'react'

const App = () => {
  
  const getData = async () =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/albums')
    const data = await response.json()

    console.log(data)
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
    </div>
  )
}

export default App

-----------------------------------------------------------

 npm i axios

 import axios from 'axios'

const App = () => {
  
  const getData = async () =>{
    const response = await axios .get('https://jsonplaceholder.typicode.com/albums')

    console.log(response.data)
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
    </div>
  )
}

export default App

-------------------------------------------------------------
with the help of destructuring

import axios from 'axios'

const App = () => {
  
  const getData = async () =>{
    const {data} = await axios .get('https://jsonplaceholder.typicode.com/albums')

    console.log(data)
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
    </div>
  )
}

export default App

-------------------------------------------------------------

import axios from 'axios'
import { useState } from 'react'

const App = () => {
  
  const [data, setdata] = useState([])

  const getData = async ()=>{
    const response = await axios.get('https://picsum.photos/v2/list')

    console.log(response.data)

    setdata(response.data)
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button> 
      <div>
        {data.map(function(elem,idx){
          return <h3>hello , {elem.author} , {idx}</h3>
        })}
      </div>    
    </div>
  )
}

export default App

