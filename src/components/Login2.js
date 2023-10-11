import React, {useState} from 'react';

function Login(){
    const[datos, setDatos]=useState({
            usuario:'',
            contrasena:'',
            autenticado: false
        })
        
    const iniciarSesion=(e)=>{
        e.preventDefault();
        console.log("Iniciando sesion...");
        localStorage.setItem('elusuario',datos.usuario);
        localStorage.setItem('logueado', true);
        setDatos({...datos, autenticado: true});
    }


        const cerrarSesion=()=>{
            localStorage.clear();
            setDatos({...datos, autenticado:false});
        }
    return(
        datos.autenticado?(
            <>
            <button className="bg-red-600 p-2 text-white rounded-lg" onClickCapture={cerrarSesion}>Salir</button>
            </>
        ) :(
        <>
        <h1 className="text-3xl font-bold text-center p-3">Iniciar sesion</h1>
        <form onSubmit={iniciarSesion} className="flex justify-center items-center">
            <input type='text' placeholder='Usuario' className="border rounded-lg p-2 mb-2"
            onChange={(e)=>{(setDatos({...datos,usuario:e.target.value}))}}/> 
            <input type='password' placeholder='Contraseña' className="border rounded-lg p-2 mb-2"
            onChange={(e)=>{(setDatos({...datos,contrasena:e.target.value}))}}/>
            <button className="p-2 bg-indigo-500 text-white rounded-lg mb-2" type ='submit'>Iniciar Sesión</button>
        </form> 
        </>

    ));
}

export default Login;