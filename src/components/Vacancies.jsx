import React from "react";
import './style/vacancies.css';


export const Vacancies= () =>{
  return(
    <div className="container-vacancies">

        <div className='header-vacancies'>
            <h1>Vacantes</h1>
            <p>Creemos en que la innovación tecnológica puede desarrollarse con mentes dispuestas a romper con lo normal. Ser disruptivos es atreverse al cambio, co-crear y potenciar las habilidades de cada uno en conjunto, para entre todos, transformar el mundo desde adentro {'\n'}
             ¿Te atreves a despegar?</p>
        </div>
        
        <div className='body-vacancies'>

          <div className='left-container'>
            <h4>STEFANINI LATAM</h4>
            <h5>INNOVANDO, TECNOLOGÍA Y TALENTO</h5>
            <button className='redirec-btn' onClick= {()=> (window.open('https://jobs.kenoby.com/stefaninilatam?utm_source=website'))}> REVISAR VACANTES </button>
            
            <h5>¿NO ENCONTRASTE NINGUNA OPORTUNIDAD COMPATIBLE?</h5>
            <p>¡Envianos tu CV y forma parte de nuestro Base de Candidatos para futuras oportunidades!</p>
            <button className='cv-btn' onClick= {()=> (window.open('https://portal.kenoby.com/stefaninilatam/login?redirect=%2Fstefaninilatam%2Fcadastrar&1=1&utm_source=website&action=email'))}> ENVIAR AHORA</button>
          </div>

          <div className='right-container'>
            <div className='title-container'>
                <h2>En Stefanini Latam puedes tener muchos beneficios, como:</h2>
            </div>
            <div className='info-container'>
                <h4>Aprendizaje – autoconocimiento</h4>
                <p>Contamos con convenios en centros de formación de primera linea para que puedas contar con un entrenamiento constante.</p>
            </div>
            <div className='info-container'>
                <h4>Asumir grandes desafios</h4>
                <p>Podras enfrentar desafios de clase mundial, compartiendo experiencias y conocimeitnos con equipos de otros paises.</p>
            </div>
            <div className='info-container'>
                <h4>Generas ideas</h4>
                <p>En Stefanini Argentina estamos atentos a las ideas que generas, estas son tenidas en cuenta para el desarrollo de tu gestión y profesión.</p>
            </div>
            <div className='info-container'>
                <h4>Equipo global</h4>
                <p>Trabajamos interconectados, contamos con presencia en mas de 40 paises para que compartan sus conocimeintos.</p>
            </div>
            <div className='info-container'>
                <h4>Nos interesas</h4>
                <p>Contamos con beneficios pensados para cuidar tu salud, con convenios para que realices actividades deportivas y una cobertura de salud pensada para tu bienestar.</p>
            </div>
          </div>
        </div>
      
     
    </div>
  )
}
