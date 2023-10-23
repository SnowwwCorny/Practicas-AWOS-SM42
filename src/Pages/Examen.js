import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import axios from 'axios'

function Examen() {
    const [data, setData] = useState({ data: [] });

    useEffect(() => {

        axios.get('https://perenual.com/api/species/details/[ID]?key=sk-Rc5e6532af7d5cf292593')
            .then(function (response) {
                
                if (Array.isArray(response.data.data)) {
                    
                    setData(response.data);
                } else {
                    console.error("La propiedad 'data' de la respuesta de la API no es un array.");
                }
            })
            .catch(function (error) {
                console.error(error);
            });
    }, []);

    return (
        <>
            <div>
                <div className="collapse bg-dark" id="navbarHeader">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 col-md-7 py-4">
                                <h4 className="text-white">About</h4>
                                <p className="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
                            </div>
                            <div className="col-sm-4 offset-md-1 py-4">
                                <h4 className="text-white">Contact</h4>
                                <ul className="list-unstyled">
                                    <li><a href="#" className="text-white">Follow on Twitter</a></li>
                                    <li><a href="#" className="text-white">Like on Facebook</a></li>
                                    <li><a href="#" className="text-white">Email me</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar navbar-dark bg-dark box-shadow">
                    <div className="container d-flex justify-content-between">
                        <a href="#" className="navbar-brand d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                            <strong>Album de plantas</strong>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>
            </div>
        <div className="album py-5 bg-light">
        <div className="container">
            <div className="row">
{data.data.map((item, index) => ( 
<>
          
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Card image cap"/>
                <div className="card-body">
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
              </div>
            </>
               ))}
          </div>
        </div>
      </div>



       
            

        </>
    );
}

export default Examen;