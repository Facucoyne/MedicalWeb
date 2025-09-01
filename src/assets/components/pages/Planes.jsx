
import React from 'react'
import Img1 from "./img/Form.png"
import "./Planes.css"
export const Planes = () => {
    return (
       <form>
        <img src={Img1} alt="" />
        <h2 className='ConsultasText'>Consultas Medicas</h2>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label" >Correo</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Escribe su correo'></input>
        <p className='text'>Esta funcion se encuentra en desarrollo</p>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Escribe una contraseña'></input>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
    <button className="btn btn-primary" for="exampleCheck1">Consultar</button>
  </div>
  
</form>
    )
    }
