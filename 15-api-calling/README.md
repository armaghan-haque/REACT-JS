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

