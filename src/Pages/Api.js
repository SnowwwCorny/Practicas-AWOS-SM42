import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';

function Api() {
    const [tours, setTours] = useState([])
    useEffect (()=>{
        axios.get("http://localhost:8082/obtenerTours")
        .then(respuesta =>{
            setTours(respuesta.data.listatours)
        })
        .catch(error=> console.log(error))
            
    },[])
    
    /*  const [tour, setTour] = useState([])
    useEffect (()=>{
        axios.get("http://localhost:8082/obtenerTour/:id")
        .then(respuesta =>{
            setTour(respuesta.data.Respuesta)
        })
        .catch(error=> console.log(error))
            
    },[])*/
    console.log("<------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->")

    return (
        <>
    {tours.map((elTour)=>{
        return <>
        <p className="font-bold text-2xl p-2 ">{elTour.nombre}</p> 
        <Link to={'/Tours/' + elTour.id_tour} className="bg-indigo-600 p-2 text-white rounded-lg">Ver tour</Link>
        
        </>
    })}
        </>
    )
}

export default Api
