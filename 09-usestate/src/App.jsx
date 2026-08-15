import React from 'react'
import { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(10)
  const [username, setusername] = useState('arman')

  function changenum(){
    setNum(30)
    setusername('manav')
  }

  return (
    <div>

      <h1>value of num is {num} <br />value of user is {username} </h1>
      <button onClick={changenum}>Click</button>

    </div>
  )
}

export default App