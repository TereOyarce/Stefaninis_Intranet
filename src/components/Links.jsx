import React from "react";
import './style/links.css';



export const Links= () =>{
  return(
    <div className='container-links'>
      
      <div className='header-link'> 
        <h1>Recursos</h1>
      </div>

      <div className='body-links'>
      <a target='_blank' href='https://stefanini.konviva.com.br/lms/#/home'>
      <div className='card-container'>
        <div className='overlay'>
            <h1>Academia</h1>
            <p>Plataforma de Aprendizaje Corporativo impartido por Stefaniners para Stefaniners.</p>
        </div>
        <div className='title-box'>
            <h2>ACADEMIA</h2>
        </div>
      </div>
      </a>

      <a target='_blank' href='https://hr.acsendo.com/results/admin'>
      <div className='card-container'>
        <div className='overlay'>
            <h1>Ascendo</h1>
            <p>Somos una plataforma integral de Recursos Humanos para evaluar el desempeño, aumentar el engagement y desarrollar las habilidades de los colaboradores.</p>
        </div>
        <div className='title-box'>
            <h2>ASCENDO</h2>
        </div>
        </div>
        </a>

      <a target='_blank' href='https://mentoring.stefanini.io/#/login'>
      <div className='card-container'>
        <div className='overlay'>
            <h1>Mentoring</h1>
            <p>Plataforma que permite a todos los colaboradores la transmisión informal del conocimiento a través de mentorías, que suman al desarrollo profesional de quien lo recibe.</p>
        </div>
        <div className='title-box'>
            <h2>MENTORING</h2>
        </div>
      </div>
      </a>

      <a target='_blank' href='https://integra.stefanini.com/portal/0103PROD/PortalSkillMapping#'>
      <div className='card-container'>
        <div className='overlay'>
            <h1>Skill Mapping</h1>
            <p>Nuestro Mapa de Talento LATAM.</p>
        </div>
        <div className='title-box'>
            <h2>SKILL MAPPING</h2>
        </div>
      </div>
      </a>

      <a target='_blank' href='https://web.yammer.com/main/feed'>
      <div className='card-container'>
        <div className='overlay'>
            <h1>Yammer</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className='title-box'>
            <h2>YAMMER</h2>
        </div>
      </div>
      </a>
    
      </div>

    </div>
  )
}
