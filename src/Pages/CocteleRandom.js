import React, { useEffect, useState } from 'react'

function CocteleRandom() {
    const [datos, setDatos] = useState([])
    const [estatus, setEstatus] = useState(false)

    useEffect(() => {
        obtenerCocktail()
    }, [])

    const obtenerCocktail = async () => {
        setEstatus(true)
        console.log("Solicitando la informacion")
        try { //Para excepciones
            const resultado = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
            if (!resultado.ok) {
                console.log("no se logro cargar el contenido")
            }
            const cocktail = await resultado.json()
            setDatos([...cocktail.drinks])
            console.log(cocktail.drinks)

            console.log(resultado)
        } catch (error) {
            console.log(error)
        } finally {
            setEstatus(false)
        }

    }

    return (
        estatus ? (
            <>
                <h1>Solicitando los datos</h1>
            </>
        ) : (

            datos.map((elcocktail) => (
                <>
                    <p className="text-center font-bold text-2xl">{elcocktail.strDrink}</p>
                    <img src={elcocktail.strDrinkThumb} />
                </>
            ))

        )
    )
}
//Ingredientes, categoria y diseño, descripcion en español
export default CocteleRandom
