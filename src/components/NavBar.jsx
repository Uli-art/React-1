import React from "react";
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">Logo</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to='/users'>Users</Link></li>
        <li><a href="#">Components</a></li>
        <li><a href="#">JavaScript</a></li>
      </ul>
    </div>
  </nav>

  );
}
export default NavBar;