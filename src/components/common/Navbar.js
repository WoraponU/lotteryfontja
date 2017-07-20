import React from 'react';
import { Navbar, Image } from 'react-bootstrap';

import './Navbar.scss';

const NavbarComponent = ({ onChangeLang }) => {
  return (
    <div className="header">
      <Navbar>      
        <Navbar.Brand>
            <Image src="assets/images/Common/logoHobbiz.png"/>
        </Navbar.Brand>       

        <Navbar.Collapse>   
          <a href="#" onClick={(e) => onChangeLang(e, 'th')}>th</a>|
          <a href="#" onClick={(e) => onChangeLang(e, 'en')}>en</a>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;