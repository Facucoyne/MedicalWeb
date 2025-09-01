

import React from 'react'
import Img1 from "./img/diente.jpg"
import Img2 from "./img/pulmon.png"
import Img3 from "./img/corazon.jpg"
import Img4 from "./img/cerebro.jpg"
import Img6 from "./img/laboratorio.jpg"
import Img7 from "./img/traumatologia.png"
import Img8 from "./img/radiologia.png"
import Img9 from "./img/otorrino.JFIF"
import "./Services.css"
export const Services = () => {
  return (
    <div>
      <h3 className='NuestrosPlanes'>Nuestros Planes</h3>
      <div className='contenedor-destacado1'>
        <div className='coder-card1'>
        <img src={Img1} alt="" />
        <div className='coder-texto1'>
          <h2>odontología </h2>
          <p>rama de la medicina que se encarga del estudio, diagnóstico, prevención y tratamiento de las enfermedades y trastornos del sistema estomatognático</p>
          
        </div>
        </div>

        <div className='coder-card1'>
        <img src={Img2} alt="" />
        <div className='coder-texto1'>
          <h3>Neumología</h3>
        <p> rama de la medicina que se enfoca en la prevención, diagnóstico y tratamiento de las enfermedades del aparato respiratorio,</p>
        </div>
        </div>

        <div className='coder-card1'>
         <img src={Img4} alt="" />
          <div className='coder-texto1'>
            <h3>Neurología</h3>
        <p>rama de la medicina que estudia y trata las enfermedades del sistema nervioso (cerebro, médula espinal, nervios periféricos y músculos)</p>
        </div>
        </div>

            <div className='coder-card1'>
         <img src={Img3} alt="" />
          <div className='coder-texto1'>
            <h3>Cardiología</h3>
        <p>rama de la medicina dedicada al estudio, diagnóstico, tratamiento y prevención de las enfermedades del corazón y del sistema circulatorio</p>
        </div>
        </div>


    <div className='coder-card1'>
         <img src={Img6} alt="" />
          <div className='coder-texto1'>
            <h3>Laboratorio</h3>
        <p> espacio equipado con los instrumentos y medios necesarios para realizar experimentos, investigaciones, análisis y prácticas de carácter científico</p>
        </div>
        </div>

    <div className='coder-card1'>
         <img src={Img7} alt="" />
          <div className='coder-texto1'>
            <h3>Traumatología</h3>
        <p>especialidad médica y quirúrgica que se encarga del estudio, diagnóstico, tratamiento y prevención de las enfermedades y lesiones </p>
        </div>
        </div>

    <div className='coder-card1'>
         <img src={Img8} alt="" />
          <div className='coder-texto1'>
            <h3>Radiología</h3>
        <p>rama de la medicina que utiliza diferentes tecnologías de imagen, como los rayos X, ultrasonidos y campos magnéticos, para diagnosticar y tratar enfermedades,</p>
        </div>
        </div>



<div className='coder-card1'>
        <img src={Img9} alt="" />
        <div className='coder-texto1'>
          <h3>Otorrinolaringología</h3>
        <p>  especialidad médica y quirúrgica que se encarga de las enfermedades, trastornos y patologías que afectan el oído, la nariz, la garganta </p>
        </div>
        </div>
      </div>
    </div>



  )
}
