import React from "react";
import './style/vacancies.css';


export const Vacancies= () =>{
  return(
    <div className="container-vacancies">
        <div className='header-vacancies'>
            <h1>Vacantes</h1>
            <p>Creemos en que la innovación tecnológica puede desarrollarse con mentes dispuestas a romper con lo normal. Ser disruptivos es atreverse al cambio, co-crear y potenciar las habilidades de cada uno en conjunto, para entre todos, transformar el mundo desde adentro. ¿Te atreves a despegar?</p>
            <button className='redirection-btn' onClick= {()=> (window.open('https://jobs.kenoby.com/stefaninilatam?utm_source=website'))}> Revisar Vacantes </button>
        </div>
        <div className='body-vacancies'>
          <div className='right-container'>
            <div>
                <h2>En Stefanini Latam puedes tener muchos beneficios, como:</h2>
            </div>
            <div>

            </div>
            <div>
              
            </div>
          </div>
          <div className='left-container'>
              

          </div>
        </div>
      
     
    </div>
  )
}
