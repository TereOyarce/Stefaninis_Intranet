import React from "react";
import { Link } from "react-router-dom";
import './style/sidebar.css';

export const Sidebar= () =>{
  return(
    <div className="container-sidebar">
      <div>
      <Link to=''>
          <button className="category-2">PERFIL</button>
      </Link>
      </div>
      <div>
      <Link to=''>
          <button className="category-2">CERRAR SESIÓN</button>
      </Link>
      </div>
    </div>
  )
}