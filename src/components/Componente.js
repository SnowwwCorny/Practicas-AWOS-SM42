import React from 'react'

function Componente() {
    return (
        <>
                <h1 className="font-bold text-3xl text-center p-5">Inicio de sesion</h1>
                <img></img>
            <div className="flex items-center justify-center p-3">
                <input className="border rounded-lg p-2 w-[30%]" placeholder='Correo'></input>
            </div>
            <div className="flex items-center justify-center p-3">
                <input className="border rounded-lg p-2 w-[30%]" placeholder='Contraseña'></input>
            </div>
            <p className="text-blue-400 text-center">Recupera tu contraseña</p>
            <p className="text-blue-400 text-center">¿No tienes cuenta?</p>

            <div className="flex items-center justify-center p-3">
                <button className="bg-indigo-700 border rounded-lg p-2 hover:bg-indigo-600">Login</button>
            </div>

        </>
    )
}

export default Componente
