import React from 'react'
import { Link } from 'react-router-dom'
import './NavigationBar.css'
import logo from '../assets/Futuristic glowing _S_ logo design.png'

const NavigationBar = () => {
  return (
    <div className="conta">
    <div className="navbar">
      
      <div className="left">
        {/* <img className='logo' src={logo} alt="Logo" /> */}
        <h2 className='name'>Softify_dev</h2>
      </div>

      <div className='links'>
        <Link to="/" className='l'>Home</Link>
        <Link to="/softify" className='l'>Softify</Link>
        <Link to="/projects" className='l'>Projects</Link>
        <Link to="/profile" className='l'>Profile</Link>
      </div>

    </div>
    </div>
  )
}

export default NavigationBar