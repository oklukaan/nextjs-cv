"use client"
import Link from 'next/link'
import React,{useState} from 'react'

import style from './navbar.module.css'
import Darkmode from '../darkmode/Darkmode'
import MobileNavbar from './MobileNavbar';


const Navbar = () => {

 

  const links=[
    {
      id:1,
      title:"Home",
      url:"/"
    },
  
   
    
   
  ]

  const changeLogout = () =>{
  }

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className={`${style.container} d-none  d-md-flex`}>
      <Link href='/' className={style.logo}>Kaan Blog</Link>
      <div className={style.links}>
        <Darkmode/>
        {links.map(link=>(
          <Link href={link.url} key={link.id}>{link.title}</Link>
        ))}
      
      </div>
      </div>
      <button onClick={toggleMenu} className="menu-button d-md-none">☰</button>
      <MobileNavbar  isOpen={menuOpen} myLinks={links}/>
      </>
  )
}

export default Navbar