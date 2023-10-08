import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { Badge, Button } from 'react-bootstrap';

export default function Favoritos() {
    const { pokemon } = useParams();
    const [info, setInfo] = useState({name:'',image:'',stats:[],type:[]});
    const navigate= useNavigate();

    async function selectedPokemon(){
        try{
            let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
            let data = await res.json();

            setInfo({name:data.name,
                    image:data.sprites.other.dream_world.front_default,
                    stats: data.stats,
                    type: data.types
            });
        }catch (error) {
            console.error('Error : ', error);
        }
    }

    function buscarPokemon(e){
        e.preventDefault();
            navigate("/desafio_pokemon_route/pokemones");
    }

    let lista = info.stats.map((estadistica, index) => (
        <li key={index}><b>{estadistica.stat.name}</b>: {estadistica.base_stat}</li>
    ));
    
    useEffect(()=>{
        selectedPokemon();
    },[])
    
    return (
        <>
            <div className='d-flex justify-content-center mt-5 gap-5'>
                <img src={info.image} alt={info.name} style={{width:'15rem'}}/>
                <div className='d-flex flex-column'>
                    <h2>{info.name.toUpperCase()}</h2>
                    <ul>
                        {lista}
                        <li>{info.type.map((type, index) => <Badge  bg='dark' key={index}  className='me-2'>{type.type.name}</Badge>)}</li>
                    </ul>
                    <Button variant='dark' onClick={(e)=>{buscarPokemon(e)}}>Volver</Button>
                </div>
                
            </div>
        </>
    );
}
