import React, { useState } from 'react'
import { Link } from 'react-scroll'
import logo from '../../assets/RJlogo.png'
import contact from '../../assets/contact.png'
import './navbar.css'
import menu from '../../assets/menu.png'
const Navbar = () => {

  const [showmenu , setShowMenu] = useState(false);
  return (
    <div className='navbar'>
      <img className='logo' src={logo} />

      <div className='desktopMenu'>
        <Link className="DesktopMenuItems" activeClass='active' to='about' duration={700} offset={-100} smooth={true} spy={true}>Home</Link>
        <Link className="DesktopMenuItems" activeClass='active' to='education' duration={700} offset={-50} smooth={true} spy={true}>About</Link>
        <Link className="DesktopMenuItems" activeClass='active' to='works' duration={700} offset={-100} smooth={true} spy={true}>Portfolio</Link>
        <Link className="DesktopMenuItems" activeClass='active' to='clients' duration={700} offset={-100} smooth={true} spy={true}>Clients</Link>
      </div>


      <button className='DesktopMenuButton' onClick={()=>{
        document.getElementById('clientImg').scrollIntoView({behavior:'smooth'});
       
      }}>
        <img src={contact} className='contactBTN' /> Contact ME
      </button>



      <img className='menu' src={menu} onClick={()=>{
        setShowMenu(!showmenu)
      }} />

<div className='mobMenu' style={{display : showmenu? 'flex' : 'none'}}>
  <Link className="mobMenuItems" activeClass='active' to='about' duration={700} offset={-100} smooth={true} spy={true} onClick={()=>{setShowMenu(false)}}>Home</Link>
  <Link className="mobMenuItems" activeClass='active' to='education' duration={700} offset={-50} smooth={true} spy={true} onClick={()=>{setShowMenu(false)}}>About</Link>
  <Link className="mobMenuItems" activeClass='active' to='works' duration={700} offset={-100} smooth={true} spy={true} onClick={()=>{setShowMenu(false)}}>Portfolio</Link>
  <Link className="mobMenuItems" activeClass='active' to='clients' duration={700} offset={-100} smooth={true} spy={true} onClick={()=>{setShowMenu(false)}}>Clients</Link>
  <Link className="mobMenuItems" activeClass='active' to='contact' duration={700} offset={-100} smooth={true} spy={true} onClick={()=>{setShowMenu(false)}}>Contact</Link>
</div>

    </div>
  )
}

export default Navbar
