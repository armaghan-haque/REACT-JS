import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav '>
        <h3>apple</h3>
        <div>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contacts'>Contacts</Link>
        </div>
      </div>
  )
}

export default Navbar