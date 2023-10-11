import React from 'react'
import FacebookLogin from 'react-facebook-login'

function Login() {
    return (
    <>
    <h1 className="text-2xl font-bold text-center">Iniciar sesion</h1>
        <FacebookLogin
        appId='977191210029196'
        autoLoad={false}
        fields='name, email'
        />
    </>
    )
}

export default Login
