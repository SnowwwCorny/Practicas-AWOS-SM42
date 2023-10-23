import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Api() {
    const [tours, setTours] = useState([])
    useEffect (()=>{
        axios.get("http://localhost:8082/obtenerTours")
        .then(respuesta =>{
            setTours(respuesta.data.listatours)
        })
        .catch(error=> console.log(error))
    },[])

    return (
        <>
    {tours.map((elTour)=>{
        return <>
        <p>{elTour.nombre}</p>
        </>
    })}
        </>
    )
}

export default Api
