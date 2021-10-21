import React from "react";
import './style/navbar.css';
import logo from '../assets/img/logo.png';


export const Navbar= () =>{

  return(
    <div>
      <div>
      <img src={logo} alt="Stefanini" className="logo-navbar"/>
      </div>
      <div className="container-gradient">
        <Link to='/links'>
          <button>GO TO LINKS</button>
          </Link>

          <Link to='/benefits'>
          <button>GO TO BENEFITS</button>
          </Link>

          <Link to='/insurance'>
          <button>GO TO INSURANCE</button>
          </Link>
      </div>
    </div>
  )
}