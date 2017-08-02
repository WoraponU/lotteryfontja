import React from 'react';
import { Navbar, Image } from 'react-bootstrap';

import './Navbar.scss';

const NavbarComponent = ({ onChangeLang, match: { params: { lang } } }) => {
  return (
    <div className="header">
      <Navbar>      
        <Navbar.Brand>
            <Image src="/assets/images/common/logoHobbiz.png"/>           
        </Navbar.Brand>       
        <div className="navMenu">  
          <a href="#" className={lang === 'th' ? 'active' : ''} onClick={(e) => onChangeLang(e, 'th')}>th</a>
          <span>|</span>
          <a href="#" className={lang === 'en' ? 'active' : ''} onClick={(e) => onChangeLang(e, 'en')}>en</a> 
        </div>
       
      </Navbar>
    </div>
  );
};

export default NavbarComponent;