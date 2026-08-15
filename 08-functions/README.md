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

----------------------------------------------

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

---------------------------------------------

import React from 'react'

const App = () => {
  return (
    <div>

      <button onClick={()=>{
        console.log('button is clicked')
      }}>
        Click 
      </button>

    </div>
  )
}

export default App

---------------------------------------------
import React from 'react'

const App = () => {
  return (
    <div>

    <input onChange={()=>{
      console.log('user is typing')
    }}
      
      type="text" placeholder='type your name' />

    </div>
  )
}

export default App

---------------------------------------------

import React from 'react'

const App = () => {
  return (
    <div>

    <input onChange={(elem)=>{
      console.log(elem.target.value)
    }}
      
      type="text" placeholder='type your name' />

    </div>
  )
}

export default App

--------------------------------------------

import React from 'react'

const App = () => {
  return (
    <div>

    <div onMouseMove={(elem)=>{
      console.log(elem.clientY)
    }}
    
    className="box"></div>

    </div>
  )
}

export default App

--------------------------------------------

import React from 'react'

const App = () => {
  
    const pagescrolling = (elem)=>{
      if(elem>0){
      console.log('scrolling up....')
      }
      else{
      console.log('scrolling down....')
      }


    } 
  
    return (
    <div onWheel={(elem)=>{
      pagescrolling(elem.deltaY)
    }}>

      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>

    </div>
  )
}

export default App

-------------------------------------------------