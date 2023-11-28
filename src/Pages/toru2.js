import React, { useEffect, useState } from "react"
import { dbFirebase } from "../bd/firebaseConfig";
import { collection, addDoc, getDocs, deleteDoc, doc, getDoc, updateDoc } from "@firebase/firestore"


function Tours() {
    const [nombre, setNombre] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [precio, setPrecio] = useState(0)
    const ToursCollection = collection(dbFirebase, 'tours')
    const [listaTours, setListaTours] = useState([])
    const [codigo, setCodigo] = useState(" ")
    const [elID, setID] = useState("");

    const editarTour = async () => {
        const tourDoc = doc(dbFirebase, 'tours', elID)
        await updateDoc(tourDoc, { Nombre: nombre, Descripcion: descripcion, Precio: Number(precio) })

    }

    const crearTour = async (event) => {
        event.preventDefault();
        await addDoc(ToursCollection, { Nombre: nombre, Descripcion: descripcion, Precio: precio })
        console.log("Tour agregado")
    }

    const mostrarTours = async () => {
        const datos = await getDocs(ToursCollection)
        setListaTours(datos.docs.map((registro) => ({
            ...registro.data(), id: registro.id
        })))
    }
    useEffect(() => {
        mostrarTours()
    })

    const eliminarTour = async (id) => {
        const tourDocument = doc(dbFirebase, "tours", id)
        await deleteDoc(tourDocument)
    }


    const cargarDatos = async (id) => {
        setCodigo(id);
        console.log(codigo);
        const tourDocument = doc(dbFirebase, 'tours', id)
        const datos = await getDoc(tourDocument);
        const elTour = datos.data();
        setNombre(elTour.Nombre)
        setDescripcion(elTour.Descripcion);
        setPrecio(elTour.Precio)
        setID(id);
    }

    return (
        <>
            <form onSubmit={crearTour}>
                <input className="bg-slate-100 rounded-lg p-2 mb-2" type="text" placeholder="Nombre"
                    onChange={(e) => setNombre(e.target.value)} />
                <input className="bg-slate-100 rounded-lg p-2 mb-2" type="text" placeholder="Descripcion"
                    onChange={(e) => setDescripcion(e.target.value)} />
                <input className="bg-slate-100 rounded-lg p-2 mb-2" type="number" placeholder="Precio"
                    onChange={(e) => setPrecio(e.target.value)} />
                <button type="submit" className="bg-green-500 p-2 text-white rounded-lg" >Guardar Tour</button>
            </form>

            {
                listaTours.map(eltour => {
                    return (<div><p>
                        {eltour.Nombre}
                        <button className="p-2 bg-red-600 text-white rounded-lg" onClick={() => { eliminarTour(eltour.id) }}>Eliminar</button>
                        <button className="p-2 bg-blue-500 text-white rounded-lg" onClick={() => { cargarDatos(eltour.id) }} data-bs-toggle="modal" data-bs-target="#exampleModal">EDITAR</button>
                    </p>
                    </div>
                    )
                })
            }

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                            <form onSubmit={crearTour}>
                                <input className="bg-slate-100 rounded-lg p-2 mb-2" type="text" placeholder="Nombre" value={nombre}
                                    onChange={(e) => setNombre(e.target.value)} />
                                <input className="bg-slate-100 rounded-lg p-2 mb-2" type="text" placeholder="Descripcion" value={descripcion}
                                    onChange={(e) => setDescripcion(e.target.value)} />
                                <input className="bg-slate-100 rounded-lg p-2 mb-2" type="number" placeholder="Precio" value={precio}
                                    onChange={(e) => setPrecio(e.target.value)} />
                                <button className="bg-green-500 p-2 text-white rounded-lg" type="submit" data-bs-dismiss="modal">Editar</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </>


    )
}

export default Tours