import React, { useState } from "react";
import './style/benefits.css';
import data from "../assets/data/benefits.json";

export const Benefits = () => {


  const dataBenefits = data.beneficios;
  console.log(dataBenefits);

  const [dataActual, setDataActual] = useState(data.beneficios);

  const showConvenios = () => {
    setDataActual(data.convenios);
    
  };

  const showBenefits = () => {
    setDataActual(dataBenefits);
    
  };

  const showDiscounts = () => {
    setDataActual(data.descuentos)
  }

  const showHelp = () => {
    setDataActual(data.dudas)

  };



  return (
    <div className='container-benefits'>
      <h1>Beneficios Stefaninier</h1>

      <div>

        <li onClick={showBenefits}> Beneficios corporativos</li>
        <li onClick={showConvenios}>Convenios</li>
        <li onClick={showDiscounts}>Descuentos</li>
        <li onClick={showHelp}>Dudas y consultas</li>
      </div>
      <div>
        {dataActual.map((pdfImages) => (
           <div key={pdfImages.id} className="pdfImages-container">
            <h3 className="pdfImages-name">{pdfImages.name}</h3>  
             <img
              src={pdfImages.img}
              width="100%"
              height="150%"
              className="screenCapture"
              alt="..."
            /> 
          </div>

           )) }
        
             
              
             

    </div>

    </div>
  
  )
}

