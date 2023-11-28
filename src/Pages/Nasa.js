import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function Nasa() {
  const getData = async () => {

    const date = document.getElementById("date").value
    const key = "D72Ko2wvROIMImSXIX9SnjUbvW5g19QYnDUnHUIu"
    const url = `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${date}`
    
    const respode = await fetch(url)
    const datos = await respode.json()
    return update(datos)
  }

  const update = (datos) => {
    document.getElementById("pic_date").innerHTML = datos.date
    document.getElementById("title").innerHTML = datos.title
    document.getElementById("apod_pic").src = datos.url
    document.getElementById("caption").innerHTML = datos.explanation
    return datos
  }

  useEffect(() =>{
    getData()
  })

  return (
    <>
    <div className="">
      <div className="bg-slate-400 p-3 grid-cols-2">
        <h1 className="font-bold text-4xl">- NASA APOD -</h1>
        <p>Astronomy Picture of the Day</p>
      </div>
    
      <h1 className="text-center font-bold text-3xl text-indigo-600">Welcome!!</h1>
      <p className="text-center">Consult the astronomical images of the day you want</p>
      <br/>
      <h2 className="text-center text-2xl">Select Date</h2>
      <div className="flex items-center justify-center h-full" id="serch">
        <input className=" bg-slate-300 rounded-lg p-2 " type="date" id="date" />
        <button className="bg-blue-600 p-2 rounded-lg text-white" onClick={getData}>Serch</button>
      </div>
      <h3 className="text-center text-3xl p-4" id="title"></h3>
      <div className="flex items-center justify-center h-full">
        <img className="w-1/2 h-full" src alt id="apod_pic" />
      </div>
      <br/>
      <h4 className="text-center text-3xl">Date</h4>
      <div className="flex items-center justify-center h-full">
        <em className="h-full" id="pic_date" />
      </div>
      <h5 className="text-center text-3xl">Description</h5>
      <p className="text-center p-2" id="caption" />
    </div>
    </>
  )
}

export default Nasa;

