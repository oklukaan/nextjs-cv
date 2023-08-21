import React from 'react';
import Link from 'next/link'

const MobileNavbar = ({ isOpen,myLinks }) => {
  return (
    <nav className={`mobile-menu ${isOpen ? 'open' : ''} `}>
      {myLinks.map(link=>(
          <Link href={link.url} key={link.id}>{link.title}</Link>
        ))}
    </nav>
  );
}

export default MobileNavbar;
