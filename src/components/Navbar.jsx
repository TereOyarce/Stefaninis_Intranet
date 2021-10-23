import React from "react";
import { Link } from "react-router-dom";
import './style/navbar.css';
import logo from '../assets/img/logo.png';
import {Searchbar} from "./Searchbar";

export const Navbar= () =>{

  const intranetSearch = [
    'stefanini',
    'premios',
    'roles',
    'chapters',
    'people and culture',
    'administracion',
    'finanzas',
    'soporte',
    'beneficios',
    'convenios',
    'seguros',
    'reembolso',
    'vidacamara',
    'caja los andes',
    'acsendo',
    'academia',
    'mentoring', 
    'trabajo',
    'postular',
    'kenoby',
    'ýammer',
    'skill mapping'
  ]

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
          
          <Searchbar word={intranetSearch}/>
          

      </div>
    </div>
  )
}