import React from 'react'

const App = () => {

  function btnclicked(){
    console.log('btn is clicked')
  } 

  return (
    <div>
      
      <button onClick={btnclicked}> Click here </button>

    </div>
  )
}

export default App