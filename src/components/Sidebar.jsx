import React from "react";
import { Link } from "react-router-dom";
import './style/sidebar.css';
import { Icon } from '@iconify/react';
import logo from '../assets/img/logo.png';
import profileImg from '../assets/img/profiledefault.png';

export const Sidebar= () =>{

  return(
    <div className="container-sidebar">
      <div className="container-logo"> 
        <Link to='/'>
          <img src={logo} alt="Stefanini" className="logo-navbar"/>
        </Link>
      </div>

      <div className ='img-container'>
        <img src={profileImg} alt="profile default" className='img-profile' />
      </div>

      <div className='links-sidebar'>
      <Link to='/profile'>
          <button className="category-2">PERFIL</button>
      </Link>
      </div>
      <div className='links-sidebar'>
      <Link to='calendar'>
          <button className="category-2">CALENDARIO</button>
      </Link>
      </div>
      <div className='links-sidebar'>
      <Link to=''>
          <button className="category-2" className='link-log'>
            CERRAR SESIÓN
            <Icon icon="bx:bx-log-out"  height="15" rotate={2} hFlip={true} vFlip={true} className="log-icon" />
          </button>
      </Link>
      </div>
    </div>
  )
}