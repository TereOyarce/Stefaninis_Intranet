import React from "react";
import './style/vacancies.css';


export const Vacancies= () =>{
  return(
    <div className="container-vacancies">

        <div className='header-vacancies'>
            <h1>Vacantes</h1>
            <p>¡Mantente al corriente de los cargos disponibles en Stefanini Chile y LATAM!   </p>
            <button className='redirec-btn' onClick= {()=> (window.open('https://jobs.kenoby.com/stefaninilatam?utm_source=website'))}> ¡Revisa Aquí! </button>
            
        </div>
        
        <div className='body-vacancies'>

          <div className='top-container'>
            <h4>¿NO ENCONTRASTE NINGUNA OPORTUNIDAD COMPATIBLE?</h4>
            <p>¡Envianos tu CV y forma parte de nuestro Base de Candidatos para futuras oportunidades!</p>
            <button className='cv-btn' onClick= {()=> (window.open('https://portal.kenoby.com/stefaninilatam/login?redirect=%2Fstefaninilatam%2Fcadastrar&1=1&utm_source=website&action=email'))}> ENVIAR AHORA</button>
          </div>

          <div className='title-container'>
                <h2>En Stefanini puedes tener muchos beneficios, como</h2>
          </div>

          <div className='bottom-container'>
        
            <div className='info-container'>
                <h4>Aprendizaje</h4>
                <p>Contamos con convenios en centros de formación de primera linea para que puedas contar con un entrenamiento constante.</p>
            </div>
            <div className='info-container'>
                <h4>Asumir grandes desafios</h4>
                <p>Podras enfrentar desafios de clase mundial, compartiendo experiencias y conocimeitnos con equipos de otros paises.</p>
            </div>
            <div className='info-container'>
                <h4>Generas ideas</h4>
                <p>Estamos atentos a las ideas que generas, estas son tenidas en cuenta para el desarrollo de tu gestión y profesión.</p>
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
