import React from 'react'

const App = () => {
  
const user = JSON.parse(localStorage.getItem('user'))
console.log(user)

  return (
    <div>Apps</div>
  )
}

export default App