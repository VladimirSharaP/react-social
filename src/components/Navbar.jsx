import React from 'react';
import nav from './Navbar.module.css'

const Navbar = () => {
    return (
      <nav className={nav.nav}>
      <div>
        <a className={`${nav.item} ${nav.active}`}>Profile</a>
      </div>
      <div>
        <a className={nav.item}>Messages</a>
      </div>
      <div>
        <a className={nav.item}>News</a>
      </div>
      <div>
        <a className={nav.item}>Music</a>
      </div>
    </nav>
    );
  }
  
  export default Navbar;