import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex py-4 px-8 bg-cyan-800 justify-between'>
      <h2 className='text-xl font-bold'>Myntra</h2>
      <div className='flex gap-8'>
        <Link className='text-xl font-medium' to='/'>Home</Link>
        <Link className='text-xl font-medium' to='/about'>About</Link>
        <Link className='text-xl font-medium' to='product'>Product</Link>
      </div>  
    </div>
  )
}

export default Navbar