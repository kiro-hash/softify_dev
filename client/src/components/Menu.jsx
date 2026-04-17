import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

const Menu = () => {
  return (
    <div className="menu">

      <h2 className="logo">Softify</h2>

      <Link to="/" className="item">Home</Link>
      <Link to="/softify" className="item">Softify</Link>
      <Link to="/projects" className="item">Projects</Link>
      <Link to="/profile" className="item">Profile</Link>

    </div>
  )
}

export default Menu