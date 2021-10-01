import React from 'react';
import { Fragment } from 'react';
import reactDom from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import Ofertas from './pages/ofertas';
import imagen from "./components/imgexport";



const App=()=>{

return(

    <Fragment>
        <div class="card mb-3 p-1 mb-2 " >
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={imagen.img2} class="img-fluid rounded-start" alt="..."></img>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body text-center">
                                <h5 class="card-title">Aviacion Civil</h5>
                                <p class="card-text">Vuelos a todos los rincones del planeta.</p>
                                <p class="card-text"><small class="text-muted">Fuerza Aerea Española</small></p>
                            </div>
                        </div>
                    </div>
                </div>
<Ofertas></Ofertas> 

    </Fragment>
)

}

reactDom.render(<App/>,document.getElementById("Aviacion"))


