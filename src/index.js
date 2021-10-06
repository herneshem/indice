import React from 'react';
import { Fragment } from 'react';
import reactDom from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import Ofertas from './components/ofertas'
import imagen from "./components/imgexport";


import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'


const App = () => {

  return (

    <Fragment>
    
    <div className="card mb-3 p-1 mb-2 " >
                <div className="row g-0">
                    <div className="col-md-4">
                     <img src={imagen.img2} className="img-fluid rounded-start" alt="..."></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-center">
                          <h5 className="card-title">Aviacion Civil</h5>
                            <p className="card-text">Vuelos a todos los rincones del planeta.</p>
                            <p className="card-text"><small className="text-muted">Fuerza Aerea Española</small></p>
                        </div>
                    </div>
                </div>
            </div>
            
      
            <div className="col">
            <div className="card ">
              <div className="col-md-2">
              <Link to="/" className="navbar-brand" aria-current="page"></Link>
                <Link className="down" onClick={this.onClickDown} to="/nacionales" > <img src={images.img3} className="card-img-top " alt="..."></img></Link>
              </div>
              <div className="card-body">
                <h5 className="card-title">Vuelos Nacionales</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
    </Fragment>
  )

}

reactDom.render(<div>
  <App />
  <Ofertas/>
  </div>, document.getElementById("Aviacion"))


