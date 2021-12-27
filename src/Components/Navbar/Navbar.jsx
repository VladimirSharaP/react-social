import React from "react";
import { NavLink } from "react-router-dom";
import nav from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={nav.nav}>
      <div className={nav.item}>
        <NavLink to="/profile" activeClassName={nav.active}>
          Profile
        </NavLink>
      </div>
      <div className={nav.item}>
        <NavLink to="/dialogs" activeClassName={nav.active}>
          Messages
        </NavLink>
      </div>
      <div className={nav.item}>
        <NavLink to="/find_users" activeClassName={nav.active}>
          Find Users
        </NavLink>
      </div>
      <div className={nav.item}>
        <NavLink to="/news" activeClassName={nav.active}>
          News
        </NavLink>
      </div>
      <div className={nav.item}>
        <NavLink to="/music" activeClassName={nav.active}>
          Music
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
