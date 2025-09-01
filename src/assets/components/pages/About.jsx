
import React from 'react'
import Img1 from "./img/img1.jpg"
import "./About.css"
export const About = () => {
  return (

    <div className='about'>
      <div className='conten'>
        <img src={Img1} alt="" />
      <div className='texto'>
       <h2 class="TextoGalery">Quines Somos</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quia, error numquam debitis repellendus quod sunt tenetur amet, quasi facere laboriosam suscipit recusandae! Ducimus quae voluptatem consequuntur quibusdam. Magni, ab!</p>
      </div>
      </div>

    </div>
  )
}
