import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import  Form  from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom';

export default function Personajes() {
    const[data, setData] = useState("");
    const[pokemon, setPokemon] = useState("");
    const navigate= useNavigate();

    async function apiRest(){
        try{
            let res= await fetch('https://pokeapi.co/api/v2/pokemon');
            let data= await res.json();
            let newData= data.results;
            setData(newData.map((pokemon, index)=>(<option value={pokemon.name} key={index}>{pokemon.name}</option>)));
        }catch (error) {
        console.error('Error : ', error);
        } 
    }
    useEffect(()=>{
        apiRest();
    },[]);


    function buscarPokemon(e){
        e.preventDefault();
        if(pokemon!= ""){
            navigate(`/desafio_pokemon_route/pokemones/${pokemon}`)
        }else{
            alert('Debes seleccionar un pokemón')
        }
    }

    return (
        <div className='input col-sm-12 col-md-12 col-lg-12'>
            <h1>
                Selecciona un pokemón
            </h1>
            <Form.Select aria-label="Default select example" onChange={({ target }) => setPokemon(target.value)} className='w-50'>
                <option defaultValue={true}>Seleccione uno</option>
                {data}
            </Form.Select>
            <Button variant='dark' onClick={(e)=>{buscarPokemon(e)}}>Ver detalle</Button>
        </div>
    )
}

