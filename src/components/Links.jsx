import React from "react";
import './style/links.css';



export const Links= () =>{
  return(
    <div className='container-links'>
      
      <div className='header-link'> 
        <h1>Recursos</h1>
      </div>

      <div className='body-links'>

     
      <div className='card-container'>
         <a target='_blank' href='https://stefanini.konviva.com.br/lms/#/home'>
           <div className='overlay'>
            <p>Plataforma de Aprendizaje Corporativo impartido por Stefaniners para Stefaniners.</p>
        </div>
        <div className='title-box'>
            <h2>ACADEMIA</h2>
        </div> 
        </a>
      </div>
     

     
      <div className='card-container'>
         <a target='_blank' href='https://hr.acsendo.com/results/admin'>
           <div className='overlay'>
            <p>Somos una plataforma integral de Recursos Humanos para evaluar el desempeño, aumentar el engagement y desarrollar las habilidades de los colaboradores.</p>
        </div>
        <div className='title-box'>
            <h2>ASCENDO</h2>
        </div>
        </a>
        </div>
        

      
      <div className='card-container'>
        <a target='_blank' href='https://mentoring.stefanini.io/#/login'>
          <div className='overlay'>
            <p>Plataforma que permite a todos los colaboradores la transmisión informal del conocimiento a través de mentorías, que suman al desarrollo profesional de quien lo recibe.</p>
        </div>
        <div className='title-box'>
            <h2>MENTORING</h2>
        </div> 
        </a>
      </div>

      
      <div className='card-container'>
        <a target='_blank' href='https://integra.stefanini.com/portal/0103PROD/PortalSkillMapping#'>
        <div className='overlay'>
            <p>Nuestro Mapa de Talento LATAM.</p>
        </div>
        <div className='title-box'>
            <h2>SKILL MAPPING</h2>
        </div>
        </a>
      </div>
      
      <div className='card-container'>
        <a target='_blank' href='https://web.yammer.com/main/feed'>
        <div className='overlay'>
            <p>Red social interna que permite la interacción de todos los Stefaniners</p>
        </div>
        <div className='title-box'>
            <h2>YAMMER</h2>
        </div> 
        </a>
      </div>
     
    
      </div>

    </div>
  )
}
