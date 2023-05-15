import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <Link to='/'>Home</Link>
        <Link to='/bioPerson'>Biodata Person Tanpa Type Safety</Link>
        <Link to='/bioPersonSafety'>Biodata Person Dengan Type Safety</Link>
    </>
  )
}

export default Navbar