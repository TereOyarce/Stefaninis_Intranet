import React from "react";
import { Link } from "react-router-dom";
import './style/navbar.css';
import logo from '../assets/img/logo.png';
import { Icon } from '@iconify/react';




export const Navbar= () =>{

  return(
    <div className="container-navbar">
      <div className="container-logo"> 
        <Link to='/home'>
          <img src={logo} alt="Stefanini" className="logo-navbar"/>
        </Link>
      </div>
      <div className="container-gradient">
        <Link to='/links'>
          <button className="category">GO TO LINKS</button>
          </Link>

          <Link to='/benefits'>
          <button className="category">GO TO BENEFITS</button>
          </Link>

          <Link to='/insurance'>
          <button className="category">GO TO INSURANCE</button>
          </Link>
          <input></input><Icon icon="clarity:search-line" color="white" height="60" rotate={2} hFlip={true} vFlip={true} />

      </div>
    </div>
  )
}