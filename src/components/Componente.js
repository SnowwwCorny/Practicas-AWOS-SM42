import React from 'react'
import User from '../img/User.png'

function Componente() {
    return (
        <>
        <h1 className="font-bold text-4xl text-center p-5">Inicio de sesion</h1>
            <div className="flex items-center justify-center p-2">
                <img className="w-[10%]" src={User}></img>
            </div>

                <div className="flex items-center justify-center p-3">
                    <input className="border rounded-lg p-2 w-[30%]" placeholder='Correo' type='email'></input>
                </div>
                <div className="flex items-center justify-center p-3">
                    <input className="border rounded-lg p-2 w-[30%]" placeholder='Contraseña' type='password'></input>
                </div>

            <a href='#'>
                <p className="text-blue-500 text-center hover:text-blue-400">Recupera tu contraseña</p>
            </a>
            <a href='#'>
                <p className="text-blue-500 text-center hover:text-blue-400">¿No tienes cuenta?</p>
            </a>

            <div className="flex items-center justify-center p-3">
                <button className="bg-indigo-700 border rounded-lg p-2 hover:bg-indigo-600 text-white">Login</button>
            </div>

        </>
    )
}

export default Componente
