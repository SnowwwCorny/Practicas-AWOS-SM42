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
            <div className="bg-pink-200">
                <div className="flex justify-center items-center h-screen">
                    <h1 className="h-auto p-5 text-5xl font-bold">Solicitando los datos...</h1>
                </div>
            </div>

            </>
        ) : (

            datos.map((elcocktail) => (
                <>
                    <div className="bg-pink-200">
                        <h1 className="text-center text-3xl font-bold text-red-500">Nombre del cocktail</h1>
                        <p className="text-center text-2xl">{elcocktail.strDrink}</p>
                        <div className="flex justify-center items-center h-screen">
                            <img className="w-1/2 h-auto p-5" src={elcocktail.strDrinkThumb} />
                        </div>
                        <h1 className="text-center text-3xl font-bold text-red-500 p-2">Categoria</h1>
                        <p className="text-center text-2xl">{elcocktail.strCategory}</p>
                        <h1 className="text-center text-3xl font-bold text-red-500 p-2">Ingredientes usados</h1>
                        <p className="text-center text-2xl">{elcocktail.strIngredient1}</p>
                        <p className="text-center text-2xl">{elcocktail.strIngredient2}</p>
                        <p className="text-center text-2xl">{elcocktail.strIngredient3}</p>
                        <p className="text-center text-2xl">{elcocktail.strIngredient4}</p>
                        <p className="text-center text-2xl">{elcocktail.strIngredient5}</p>
                        <p className="text-center text-2xl">{elcocktail.strIngredient6}</p>
                        <p className="text-center text-2xl">{elcocktail.strIngredient7}</p>
                        <p className="text-center text-2xl">{elcocktail.strIngredient8}</p>
                        <p className="text-center text-2xl">{elcocktail.strIngredient9}</p>
                        <p className="text-center text-2xl">{elcocktail.strIngredient10}</p>
                        <p className="text-center text-2xl">{elcocktail.strIngredient11}</p>
                        <p className="text-center text-2xl">{elcocktail.strIngredient12}</p>
                        <p className="text-center text-2xl">{elcocktail.strIngredient13}</p>
                        <p className="text-center text-2xl">{elcocktail.strIngredient14}</p>
                        <p className="text-center text-2xl">{elcocktail.strIngredient15}</p>

                    </div>
                </>
            ))

        )
    )
}

//Ingredientes, categoria y diseño, descripcion en español
export default CocteleRandom
