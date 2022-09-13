import React from 'react'
import './Profile.css'
import Navbar from '../../Components/Navbar/Navbar'
import SidebarTL from '../../Components/SidebarTL/SidebarTL'
import Position from '../../Components/Position/Position'

const Profile = () => {
  return (
    <div>
    <div className="home">
      <SidebarTL />
      <div className="homeContainer">
        <Navbar />
        <h1 style={{ marginTop: '10px' }} className="center-text">Info About Position</h1>
        <div className="listContainer3">
        <Position />
        </div>
        </div>
        </div>
    </div>
  )
}

export default Profile