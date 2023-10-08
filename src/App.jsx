import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './views/Home'
import Personajes from './views/Personajes'
import Favoritos from './views/Favoritos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/desafio_pokemon_route' element={<Home/>}>
            Home
          </Route>
          <Route path='/desafio_pokemon_route/pokemones' element={<Personajes/>}>
            Personajes
          </Route>
          <Route path='/desafio_pokemon_route/pokemones/:pokemon' element={<Favoritos/>}>
            Favoritos
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
