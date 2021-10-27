import React from "react";
import './style/insurance.css';
import insurance from '../assets/img/insurance.jpg';
import logovc from '../assets/img/logovc.png';
import insurance2 from '../assets/img/insurance2.jpg';
import insurance3 from '../assets/img/insurance3.jpg';
import Video from './Video'
import Pdf from "../assets/pdf/folleto.pdf";
import Pdf2 from "../assets/pdf/manual.pdf"
import Pdf3 from "../assets/pdf/reembolso.pdf"
import Pdf4 from "../assets/pdf/infografia.pdf"
import { Icon } from '@iconify/react';


export const Insurance= () =>{

  const general = () => {document.querySelector('.general-insurance').style.display='';
  document.querySelector('.manual-insurance').style.display='none';
  document.querySelector('.refund-insurance').style.display='none';}

  const manual = () => {document.querySelector('.manual-insurance').style.display='';
  document.querySelector('.general-insurance').style.display='none';
  document.querySelector('.refund-insurance').style.display='none';}

  const refund = () => {document.querySelector('.refund-insurance').style.display='';
  document.querySelector('.general-insurance').style.display='none';
  document.querySelector('.manual-insurance').style.display='none';}

  

  return(
    <div className='containter-insurance'>

      <div className='header-insurance'>
        <h1>Seguros</h1>
          <div>
            <li onClick={()=>general()}>Información general</li>
            <li onClick={()=>manual()}>Manual del usuario</li>
            <li onClick={()=>refund()}>Reembolso</li>
          </div>
      </div>

    <div className='body-insurance'>
    
    <div className="general-insurance" >
        <h3>SEGURO COMPLEMENTARIO</h3>
        <img src={insurance} alt="Seguro" className="img-insurance"/>
        <h4>Vigencia 01 de enero 2021 al 31 de diciembre de 2021.</h4>
        <div className="p-insurance">  
          <p>Junto con saludar, nos es grato contarte que, en una permanente búsqueda por mejorar
          nuestros beneficios , hemos renovado el Programa de Seguro Complementario de Vida y
          Salud , con la participación de la compañía Vida Cámara.</p>
        </div>
    
        <h4>Dentro de este folleto encontrarás:</h4>
        <li >Tu plan de cobertura</li>
        <li >Convenios y beneficios de salud</li>
        <button 
        className="btn-insurance"
        onClick={()=>window.open(Pdf)}
        ><Icon icon="vscode-icons:file-type-pdf" height={30} />Lee más</button>
        <h4>Si aún tienes dudas sobre cómo leer tu seguro de salud</h4>
        <Video ytId="m5NV2tYLEpo"/>
    </div>


    <div className="manual-insurance"style={{display: "none"}}>
        <h3>MANUAL DEL USUARIO</h3>
        <img src={insurance2} alt="Seguro" className="img-insurance"/>
        <div className="p-insurance">
          <p>Este manual tiene por objetivo entregarte información de cómo hacer uso
          de tu seguro complementario de salud.</p>
          <p>Este seguro complementa la cobertura entregada por el sistema de salud
          previsional de cada beneficiario, y actúa una vez que la Isapre, Fonasa u
          otra entidad haya reembolsado un gasto médico que se encuentre
          contenido en el plan de coberturas del seguro complementario Vida
          Cámara.</p>
          <p>Es importante que sepas que cada plan es diferente pues está hecho de
          acuerdo a las necesidades y requerimientos de cada organización que
          contrata a Vida Cámara, por eso, te invitamos a leer tu Plan de Reembolso
          y Póliza.</p>
        </div>
        <h4>Manual general para asegurados:</h4>
        <button 
        className="btn-insurance"
        onClick={()=>window.open(Pdf2)}
        ><Icon icon="vscode-icons:file-type-pdf" height={30} />Lee más</button>
        <a href="https://www.vidacamara.cl/" target="_blank">
        <img src={logovc} alt="Logo-VC" className="logo-vc"/></a>
    </div>


      <div className="refund-insurance"style={{display: "none"}}>
        <h3>REEMBOLSO</h3>
        <img src={insurance3} alt="Seguro" className="img-insurance"/>
        <div className="p-insurance">
          <p>Es importante mantenerte informado respecto
          a los documentos que debes presentar para
          realizar correctamente tus solicitudes de
          reembolso.</p>
        </div>

        <div className="box-insurance">
          <div className="info-container">
            <h4>Documentación requerida:</h4>
            <button 
            className="btn-insurance"
            onClick={()=>window.open(Pdf3)}
            ><Icon icon="vscode-icons:file-type-pdf" height={30} />Lee más</button>
          </div>  

          <div className="info-container">
            <h4>Pasos a paso para tu reembolso:</h4>
            <button 
            className="btn-insurance"
            onClick={()=>window.open(Pdf4)}
            ><Icon icon="vscode-icons:file-type-pdf" height={30}/>Lee más</button>
          </div>

          <div className="info-container">
          <h4>Aprende a usar la app de reembolso</h4>
          < Video ytId="fQ3VMNCk9Lw"/>
          </div>
        </div>
        </div>    
      </div>
    </div>
  )
}
