import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'
import { ChevronRight } from 'lucide-react';

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={`menu ${open ? "active" : ""}`}>
        <h2 className="logo">Softify</h2>
        <ChevronRight className='menuicon' onClick={() => setOpen(!open)} />
        <Link to="/" className="item">Home</Link>
        <Link to="/softify" className="item">Softify</Link>
        <Link to="/projects" className="item">Projects</Link>
        <Link to="/profile" className="item">Profile</Link>
      </div>
    </>
  )
}

export default Menu;