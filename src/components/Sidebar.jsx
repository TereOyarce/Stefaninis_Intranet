import React from "react";
import { Link } from "react-router-dom";
import './style/sidebar.css';
import { Icon } from '@iconify/react';

export const Sidebar= () =>{
  return(
    <div className="container-sidebar">
      <div>
      <Link to='/profile'>
          <button className="category-2">PERFIL</button>
      </Link>
      </div>
      <div>
      <Link to='calendar'>
          <button className="category-2">CALENDARIO</button>
      </Link>
      </div>
      <div>
      <Link to=''>
          <button className="category-2">
            CERRAR SESIÓN
            <Icon icon="bx:bx-log-out"  height="30" rotate={2} hFlip={true} vFlip={true} className="log-icon" />
          </button>
      </Link>
      </div>
    </div>
  )
}