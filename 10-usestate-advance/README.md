import React, { useState } from 'react'

const App = () => {
  
  const [num, setnum] = useState({user: 'Toby' , age: 20})

  const btnclicked = ()=>{
    const newNum = {...num}
    newNum.user = 'Mathew'
    newNum.age = 30
    setnum(newNum)
  }

  return (
    <div>

      <h1> {num.user} , {num.age} </h1>
      <button onClick={btnclicked} >click</button>

    </div>
  )
}

export default App

------------------------------------------------------------

import React, { useState } from 'react'

const App = () => {
  
  const [num, setnum] = useState([10,20,30])

  const btnclicked = ()=>{
    const newNum = [...num]
    newNum.push(99)
    setnum(newNum)
  }

  return (
    <div>

      <h1> {num} </h1>
      <button onClick={btnclicked} >click</button>

    </div>
  )
}

export default App

----------------------------------------------------------

import React, { useState } from 'react'

const App = () => {
  
  const [num, setnum] = useState({user: 'Toby' , age: 20})

  const btnclicked = ()=>{
    setnum(prev=>({...prev , age:50}))
  }

  return (
    <div>

      <h1> {num.user} , {num.age} </h1>
      <button onClick={btnclicked} >click</button>

    </div>
  )
}

export default App

---------------------------------------------------------
Batch update

import React, { useState } from 'react'

const App = () => {
  
  const [num, setnum] = useState(0)

  const btnclicked = ()=>{
    setnum(prev=>(prev + 1))
     setnum(prev=>(prev + 1))
      setnum(prev=>(prev + 1))
  }

  return (
    <div>

      <h1> {num} </h1>
      <button onClick={btnclicked} >click</button>
      
    </div>
  )
}

export default App