import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Home() {

  return (
    <div className='home col-sm-12 col-md-12 col-lg-12 '>
      <h1>Bienvenido maestro pokemón</h1>
      <img className='imgHome' src='https://www.pngarts.com/files/3/Pokemon-Pikachu-Free-PNG-Image.png' alt="Pikachu" />
  </div>
  )
}
