import React from 'react'
import NbaLogo from "../../assets/nba-logo.png"
import "./Header.css"

const Header = () => {
  return (
    <header>
        <img src={NbaLogo} alt="" className='logo' />
        <h1 className='title'>NBA LEGENDS</h1>
    </header>
  )
}

export default Header