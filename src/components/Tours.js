import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


function Tours() {
    const [tourID, setTourID] = useState([])
    const id = useParams()
    useEffect(()=>{
        obtenerTour()
    },[id])

    const obtenerTour = async () =>{
        axios.get(`http://localhost:8082/obtenerTour/${id}`)
        .then(respuesta =>{
            setTourID(respuesta.data.Respuesta)
        })
        .catch(error => console.log(error))
    }
    return (
        <>
        <h1 className="text-center font-bold text-3xl">Detalles</h1>
        {tourID.map((detallesTour)=>(
            <>
            <p>{detallesTour.nombre}</p>
            <p>{detallesTour.descripcion}</p>
            <p>{detallesTour.precio}</p>
            <p>{detallesTour.estatus}</p>
            </>
        ))}
        </>
    )
}

export default Tours
