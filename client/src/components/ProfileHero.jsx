import React from 'react'
import './ProfileHero.css'
import icon from '../../public/favicon.svg'
import { useState } from 'react'
const ProfileHero = () => {
    const [name, setname] = useState([])
  return (
    <>
    <div className="container">
        <div className="cardP">
            <img src={icon} alt="" />
        </div>    
        <div className="desc">
            <h2>Martin Luis</h2>
            <h4>Martin123@gmail.com</h4>
            <p>Admin</p>
        </div>
    </div> 
    </>
  )
}

export default ProfileHero
