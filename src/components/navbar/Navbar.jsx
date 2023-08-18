"use client"
import Link from 'next/link'
import React from 'react'

import style from './navbar.module.css'
import Darkmode from '../darkmode/Darkmode'

const Navbar = () => {

  const links=[
    {
      id:1,
      title:"Home",
      url:"/"
    },
    {
      id:2,
      title:"Portfolio",
      url:"/portfolio"
    },
    {
      id:3,
      title:"Blog",
      url:"/blog"
    },
    {
      id:4,
      title:"About",
      url:"/about"
    },
    {
      id:5,
      title:"Dashboard",
      url:"/dashboard"
    }
  ]

  const changeLogout = () =>{
    console.log('tiklandi')
  }

  return (
    <div className={style.container} >
      <Link href='/' className={style.logo}>Kaan Blog</Link>
      <div className={style.links}>
        <Darkmode/>
        {links.map(link=>(
          <Link href={link.url} key={link.id}>{link.title}</Link>
        ))}
        <button onClick={changeLogout} className={style.logout}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar