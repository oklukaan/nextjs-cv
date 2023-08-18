
import React from 'react'
import Image from 'next/image'
import style from './footer.module.css'

const footer = () => {

  const links=[
    {
      id:1,
      title:'Facebook',
      url:'https://www.facebook.com',
      src:'facebook.png',
      alt:'Facebook logosu'

    },
    {
      id:2,
      title:'Linkedin',
      url:'https://www.linkedin.com',
      src:'linkedin.png',
      alt:'Linkedin Logosu'
    }
  ]

  return (
    <div className={style.container}>
      <span>@2023 Kaan. All rights reserved</span>

      <div className={style.logo}>
      {
        links.map(link=>(
         <a href={link.url} key={link.id}> <Image src={'/'+link.src} width={20} height={20} alt={link.alt}/></a>
        ))
      }
      
     
      </div>


    </div>
  )
}

export default footer