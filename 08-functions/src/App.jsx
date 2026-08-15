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