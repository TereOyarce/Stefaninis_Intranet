import React from "react";
import { Link } from "react-router-dom";
import './style/sidebar.css';
import { Icon } from '@iconify/react';
import logo from '../assets/img/logo.png';
import profileImg from '../assets/img/profiledefault.png';
export const Sidebar= () =>{
  return(
    <div className="container-sidebar">

        <Link to='/'>
        <div className="container-logo"> 
          <img src={logo} alt="Stefanini" className="logo-navbar"/>
          </div>
        </Link>
      
      <div className ='img-container'>
        <img src={profileImg} alt="profile default" className='img-profile' />
      </div>
     
      <Link to='/profile'>
      <div className='links-sidebar'>
          <button className="category-2">PERFIL</button>
          </div>
      </Link>
     
     
      <Link to='calendar'>
      <div className='links-sidebar'>
          <button className="category-2">CALENDARIO</button>
          </div>
      </Link>
     
      
      <Link to=''>
      <div className='links-sidebar'>
          <button className="category-2" className='link-log'>
            CERRAR SESIÓN
            <Icon icon="bx:bx-log-out"  height="15" rotate={2} hFlip={true} vFlip={true} className="log-icon" />
          </button>
          </div>
      </Link>
     
    </div>
  )
}