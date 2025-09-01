
import { Banner } from './Banner'
import React from 'react'
import { Atencion } from './Atencion'
import { Slider } from './Slider'
import { Planes } from './Planes'

export const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Atencion></Atencion>
      <Slider></Slider>
      <Planes></Planes>
    </div>
  )
}
