import React from 'react'
import { NavLink } from "react-router-dom";

export default function NavBar() {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : "noactive");
    return (
        <div className='nav'>
            <NavLink to='/desafio_pokemon_route/'>
                <img className='icon' src="https://www.pngplay.com/wp-content/uploads/2/Pokeball-PNG-Photo-Image.png"   rel='icon' alt="icon" />
            </NavLink>
        
            <div className='navBar'>
                <NavLink className={ setActiveClass } to="/desafio_pokemon_route/">
                    Inicio
                </NavLink>
                <NavLink className={ setActiveClass } to="/desafio_pokemon_route/pokemones">
                    Pokemones
                </NavLink>
            </div>
        </div>
    );
}
