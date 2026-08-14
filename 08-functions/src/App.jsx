import React from 'react'

const App = () => {

  function btnclicked(){
    console.log('btn is clicked')
  } 

  function mouseEnter(){
    console.log('Mouse Entered')
  }

  return (
    <div>
      
      <button onMouseEnter={mouseEnter} onDoubleClick={btnclicked}> Click here </button>

    </div>
  )
}

export default App

