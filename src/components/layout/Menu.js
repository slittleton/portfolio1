import React,{createRef } from 'react';
import {Link} from 'react-router-dom';

const Menu = (props) => {

  const { navClick, homeRef, projectsRef, aboutRef,contactRef } = props;

  return(

    <nav className="menu-bar">
    <ul className="list">
      <li className="list-item">
        <div onClick={()=>navClick(homeRef)} className="link-item">Home</div>
      </li>
      <li className="list-item">
        <div onClick={()=>navClick(projectsRef)} className="link-item">Projects</div>
      </li>
      <li className="list-item">
        <div onClick={()=>navClick(aboutRef)} className="link-item">About</div>
      </li>
      <li className="list-item">
        <div onClick={()=>navClick(contactRef)} className="link-item">Contact</div>
      </li>
    </ul>
  </nav>
  )
  // return(

  //   <nav className="menu-bar">
  //   <ul className="list">
  //     <li className="list-item">
  //       <Link to="/" className="link-item">Home</Link>
  //     </li>
  //     <li className="list-item">
  //       <Link to="/projects" className="link-item">Projects</Link>
  //     </li>
  //     <li className="list-item">
  //       <Link to="/about" className="link-item">About</Link>
  //     </li>
  //     <li className="list-item">
  //       <Link to="/contact" className="link-item">Contact</Link>
  //     </li>
  //   </ul>
  // </nav>
  // )
}

export default Menu;

