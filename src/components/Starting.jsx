import React, { useState } from "react";
/* import ReactDOM from "react-dom"; */
import Carousel from "react-simply-carousel";
import './style/starting.css'
import { Link } from "react-router-dom";

function Starting() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className='carousel-container'>
      <div className='header-carousel'>
        <h1>Bienvenido al portal del Colaborador</h1>
        <p>Creemos en que la innovación tecnológica puede desarrollarse con mentes dispuestas a romper con lo normal.
           Ser disruptivos es atreverse al cambio,<br/> co-crear y potenciar las habilidades de cada uno en conjunto, 
           para entre todos, transformar el mundo desde adentro.</p>
      </div>
      <div className='body-carousel'>

        <Carousel
          updateOnItemClick className=' updateOnItemClick'
          containerProps={{
            style: {
              
            }
          }}
          activeSlideIndex={activeSlide}
          activeSlideProps={{
            style: {

            }
          }}
          onRequestChange={setActiveSlide}
          forwardBtnProps={{
            children: ">",
            style: {
              width: 60,
              height: 60,
              minWidth: 60,
              alignSelf: "center",
              border: "none",
              background: "#16857B",
              borderRadius: "50%",
              color: "white",
              margin: "0.5rem",
              cursor: "pointer",

            }
          }}
          backwardBtnProps={{
            children: "<",
            style: {
              width: 60,
              height: 60,
              minWidth: 60,
              alignSelf: "center",
              border: "none",
              background: "#16857B",
              borderRadius: "50%",
              color: "white",
              margin: "0.5rem",
              cursor: "pointer",

            }
          }}
          itemsToShow={1}
          speed={400}
        >

          <img src="https://i.imgur.com/QsIG4bG.png" alt="" onClick={() => (window.open('http://verticales.inetcloud.cl:8082/rrhh/login.aspx'))} />

          <Link to='/links'>
            <img src="https://i.imgur.com/Up7nDHE.png" alt="" />
          </Link>
          <Link to='/benefits'>
            <img src="https://i.imgur.com/4bkBU6v.png" alt="" />
          </Link>
          <Link to='/insurance'>
            <img src="https://i.imgur.com/2teWAFF.png" alt="" />
          </Link>
          <Link to='/vacancies'>
            <img src="https://i.imgur.com/Zo0FfPg.png" alt="" />
          </Link>

        </Carousel>
      </div>
    </div>
  );
}
// ReactDOM.render(<Starting />, document.getElementById("root"));

export default Starting;

