/*import React from 'react'
import { dbFirebase } from '../db/firebaseConfig'
import { useState } from 'react'
import { collection, addDoc, getDocs, deleteDoc, doc, getDoc, updateDoc } from "@firebase/firestore"
import { useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function Tours() {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState(0);
  const ToursCollection = collection(dbFirebase, 'tours');
  const [listaTours, setListaTours] = useState([]);
  const [elID, setID] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const editarTour = async (e) => {
    e.preventDefault();
    const tourDoc = doc(dbFirebase, 'tours', elID);
    await updateDoc(tourDoc, { Nombre: nombre, Descripcion: descripcion, Precio: Number(precio) });

    limpiarFormulario();

    mostrarTours();
  };

  const limpiarFormulario = () => {
    setNombre("");
    setDescripcion("");
    setPrecio(0);
  };

  const crearTour = async (event) => {
    event.preventDefault();
    await addDoc(ToursCollection, { Nombre: nombre, Descripcion: descripcion, Precio: precio });
    console.log("Tour agregado");

    limpiarFormulario();

    mostrarTours();
  };

  const mostrarTours = async () => {
    const datos = await getDocs(ToursCollection);
    setListaTours(datos.docs.map((registro) => ({
      ...registro.data(), id: registro.id
    })));
  };

  useEffect(() => {
    mostrarTours();
  }, []);

  const eliminarTour = async (id) => {
    const tourDocument = doc(dbFirebase, "tours", id);
    await deleteDoc(tourDocument);

    mostrarTours();
  };

  const cargarDatos = async (id) => {
    const tourDocument = doc(dbFirebase, 'tours', id);
    const datos = await getDoc(tourDocument);
    const elTour = datos.data();
    setNombre(elTour.Nombre);
    setDescripcion(elTour.Descripcion);
    setPrecio(elTour.Precio);
    setID(id);
    setModalVisible(true);
  };

  return (
    <>
      <form onSubmit={crearTour}>
        <input className="bg-slate-100 rounded-lg p-2 mb-2" type="text" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} value={nombre} />
        <input className="bg-slate-100 rounded-lg p-2 mb-2" type="text" placeholder="Descripcion" onChange={(e) => setDescripcion(e.target.value)} value={descripcion} />
        <input className="bg-slate-100 rounded-lg p-2 mb-2" type="number" placeholder="Precio" onChange={(e) => setPrecio(e.target.value)} value={precio} />
        <button className="bg-green-500 p-2 text-white rounded-lg" type="Submit">Guardar</button>
      </form>

      {listaTours.map(eltour => {
        return (
          <div key={eltour.id}>
            <p>
              {eltour.Nombre}
              <button className="btn btn-danger" onClick={() => eliminarTour(eltour.id)}>Eliminar</button>
              <button className="btn btn-primary" onClick={() => cargarDatos(eltour.id)} data-bs-toggle="modal" data-bs-target="#exampleModal">Editar</button>
            </p>
          </div>
        )
      })}


      <div className={`modal fade ${modalVisible ? 'show' : ''}`} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden={!modalVisible}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Editar Tour</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setModalVisible(false)}></button>
            </div>
            <div className="modal-body">
              <form onSubmit={editarTour}>
                <input className="bg-slate-100 rounded-lg p-2 mb-2" type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                <input className="bg-slate-100 rounded-lg p-2 mb-2" type="text" placeholder="Descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                <input className="bg-slate-100 rounded-lg p-2 mb-2" type="number" placeholder="Precio" value={precio} onChange={(e) => setPrecio(e.target.value)} />
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setModalVisible(false)}>Cerrar</button>
              <button type="button" className="btn btn-success" onClick={editarTour} data-bs-dismiss="modal">Guardar Cambios</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tours; */
