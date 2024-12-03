'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../../public/img/logo.png'; 
import menu_icon from '../../public/img/menu-icon.svg'; 
import close_icon from '../../public/img/close-icon.svg'; 
import Link from 'next/link';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    if (menuOpen) {
      document.addEventListener('click', closeMenu);
    } else {
      document.removeEventListener('click', closeMenu);
    }
    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, [menuOpen]);
 
  const handleMenuToggle = (e) => {
    e.stopPropagation();
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="container">
        <div className="header-wrapper">
          <div className="menu-icon" onClick={handleMenuToggle}>
          <Image src={menu_icon} alt="menu_icon"/>
          </div>
          <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
            <ul>
              <li><Link href="/" aria-label="Startseite">STARTSEITE</Link></li>
              <li><Link href="/unternehmen" aria-label="Unternehmen">UNTERNEHMEN</Link></li>
              <li><Link href="/team" aria-label="Team">TEAM</Link></li>
              <li><Link href="/produkt-und-leistungs-portfolio" aria-label="Produkt und Leistungs-Portfolio">PRODUKT UND LEISTUNGS-PORTFOLIO</Link></li>
              <li><Link href="/kontakt" aria-label="Kontakt">KONTAKT</Link></li>
              <li><Link href="/dokumente" aria-label="Dokumente">DOKUMENTE</Link></li>
            </ul>
            <div className="close-icon" onClick={handleMenuToggle}>
            <Image src={close_icon} alt="close-icon"/>
            </div>
          </div>
          <div className="logo">
            <Link href="/" aria-label="Logo">
              <Image src={logo} alt="logo" />
            </Link>
          </div>
          <div className="search"> 
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
