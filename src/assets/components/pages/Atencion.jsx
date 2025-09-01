
import React from 'react'
import "./Atencion.css"
import Img1 from "./img/ice5.jpeg"
import Img2 from "./img/ice2.jpg"
import Img3 from "./img/ice4.jpg"
export const Atencion = () => {
  return (


    <>
            <h2 className='PrincipalText'>Nuestros Servicios</h2>
       
    <div className='contenedor-destacado'>
       
        <div className='coder-card'>
        
            <img src={Img1} alt="" />
            <div className='coder-texto'>
                
           
            <h5>Odontología Estética</h5>
            
            
            
            </div>
             <button class="cssbuttons-io-button">
  <svg
    height="24"
    width="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0h24v24H0z" fill="none"></path>
    <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" fill="currentColor"></path>
  </svg>
  <span>Contratar</span>
</button>
        </div>

        <div className='coder-card'>
            <img src={Img2} alt="" />
            <div className='coder-texto'>
           <h5>Diagnóstico por Imágenes</h5>
            </div>
              <button class="cssbuttons-io-button">
  <svg
    height="24"
    width="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0h24v24H0z" fill="none"></path>
    <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" fill="currentColor"></path>
  </svg>
  <span>Contratar</span>
</button>
        </div>

        <div className='coder-card'>
            <img src={Img3} alt="" />
            <div className='coder-texto'>
                <h5>Laboratorio clínico</h5>
            </div>
             <button class="cssbuttons-io-button">
  <svg
    height="24"
    width="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0h24v24H0z" fill="none"></path>
    <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" fill="currentColor"></path>
  </svg>
  <span>Contratar</span>
</button>
        </div>

    </div>
     </>
    )
}
