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
    'yammer',
    'skill mapping'
  ]

  return(
    <div className="container-navbar">
      
      <div className="container-gradient">
          
      <button 
          className= "category"
          onClick= {()=> (window.open('http://verticales.inetcloud.cl:8082/rrhh/login.aspx'))}>RRHH</button>
          
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

          <div>
            <button 
            className="btn-bars"
            onClick= {()=> (document.getElementById('category-menu').style.display='block')}>
            <Icon icon="feather:menu" color="white" height="30" rotate={2} hFlip={true} vFlip={true} />
            </button>
          </div>
          
      </div>

      <div id="category-menu">
          <div>
            <button 
            className= "btn-close"
            onClick= {()=> (document.getElementById("category-menu").style.display='none')}>
            <Icon icon="eva:close-fill" color="#0b1641" height="30" rotate={2} hFlip={true} vFlip={true} />
            </button>
          </div>

          <div className='links-navbar'>
            <button 
            className= "category-3"
            onClick= {()=> (window.open('http://verticales.inetcloud.cl:8082/rrhh/login.aspx'))}
            >RRHH
            </button>
          </div>

          <div className='links-navbar'>
          <Link to='/links'>
          <button className="category-3">Recursos</button>
          </Link>
          </div>

          <div className='links-navbar'>
          <Link to='/benefits'>
          <button className="category-3">Beneficios</button>
          </Link>
          </div>

          <div className='links-navbar'>
          <Link to='/insurance'>
          <button className="category-3">Seguro</button>
          </Link>
          </div>

          <div className='links-navbar'>
          <Link to='/vacancies'>
          <button className="category-3">Vacantes</button>
          </Link>
          </div>

          <div>
          <Searchbar word={intranetSearch}/>
          </div>          
      </div>
    </div>
  )
}