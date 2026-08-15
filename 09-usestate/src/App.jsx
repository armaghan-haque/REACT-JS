import React from 'react'
import { useState } from 'react'

const App = () => {

  const [num, setnum] = useState(0)

  function increasenum(){
    setnum(num + 1)
  }

  function decreasenum(){
    setnum(num - 1)
  }

  function increaseby5(){
    setnum(num + 5)
  }


  return (
    <div>

    <h1> {num} </h1>
    <button onClick={increasenum}> Increase </button>
    <button onClick={decreasenum}> Decrease </button> <br />
    <button onClick={increaseby5}> Increase by 5 </button>


    </div>
  )
}

export default App