import React from "react";
import { Link } from "react-router-dom";
import './style/navbar.css';
import {Searchbar} from "./Searchbar";
import { Icon } from '@iconify/react';

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
      
      <div className="container-gradient">

          <div>
            <button className="btn-bars">
            <Icon className="bars-icon" icon="feather:menu" color="white" height="30" rotate={2} hFlip={true} vFlip={true} />
            </button>
          </div>
          
          <button 
          className= "category"
          onClick= {()=> (window.open('http://verticales.inetcloud.cl:8082/rrhh/login.aspx'))}
          >RRHH
          </button>
        
          <Link to='/links' activeStyle>
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