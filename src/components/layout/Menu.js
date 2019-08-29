import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';

const Menu = () => {

  return(
    <nav className="menu-bar">
    <ul className="list">
      <li className="list-item">
        <Link to="/" className="link-item">Home</Link>
      </li>
      <li className="list-item">
        <Link to="/projects" className="link-item">Projects</Link>
      </li>
      <li className="list-item">
        <Link to="/about" className="link-item">About</Link>
      </li>
      <li className="list-item">
        <Link to="/contact" className="link-item">Contact</Link>
      </li>
    </ul>
  </nav>
  )
}

export default Menu;

