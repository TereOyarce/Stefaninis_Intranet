import React from "react";
import { Link } from "react-router-dom";
import './style/navbar.css';
import logo from '../assets/img/logo.png';
import { Icon } from '@iconify/react';




export const Navbar= () =>{

  return(
    <div className="container-navbar">
      <div className="container-logo"> 
        <Link to='/'>
          <img src={logo} alt="Stefanini" className="logo-navbar"/>
        </Link>
      </div>
      <div className="container-gradient">
          
          <button className="category">RRHH</button>
          
          <Link to='/links'>
          <button className="category">Recursos</button>
          </Link>

          <Link to='/benefits'>
          <button className="category">Beneficios</button>
          </Link>

          <Link to='/insurance'>
          <button className="category">Seguro</button>
          </Link>

          <Link to='/vacancies'>
          <button className="category">Vacantes</button>
          </Link>

          <input></input><Icon icon="clarity:search-line" color="white" height="20" rotate={2} hFlip={true} vFlip={true} />

      </div>
    </div>
  )
}