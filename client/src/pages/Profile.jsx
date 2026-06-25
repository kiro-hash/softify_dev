import React from 'react'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import ProfileHero from '../components/ProfileHero'
const Profile = () => {
  return (
    <div>
      <NavigationBar/>
      <Menu/>
      <ProfileHero/>
      <Footer/>
    </div>
  )
}

export default Profile
