import React from 'react'
import images from '../components/imgexport'
import ReactDOM from 'react-dom'

import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nacionales from './nacionales'




class Ofertas extends React.Component {
  render() {
    return (
      
      <Router>
        
        <div className="row  row-cols-md-2 g-4 bg-primary mx-5 pb-3">
          <div className="col">
            <div className="card ">
              <div className="col-md-2">
                <Link to="/nacionales" > <img src={images.img3} className="card-img-top " alt="..."></img></Link>
              </div>
              <div className="card-body">
                <h5 className="card-title">Vuelos Nacionales</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="col-md-2 bg-white">
                <img src={images.img6} className="card-img-top bg-white" alt="..."></img>

              </div>
              <div className="card-body">
                <h5 className="card-title">Vuelos Internacionales</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="col-md-2">
                <img src={images.img4} className="card-img-top" alt="..."></img>
              </div>
              <div className="card-body">
                <h5 className="card-title">Vuelos paquetes turísticos</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="col-md-2">
                <img src={images.img5} className="card-img-top" alt="..."></img>
              </div>
              <div className="card-body">
                <h5 className="card-title">Vuelos Mascotas</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural.</p>
              </div>
            </div>
          </div>
        </div>


        <Switch>       
            <Route path="/nacionales">
              <Nacionales></Nacionales>
            </Route>
        </Switch>

      </Router>

    )
  }
}
export default Ofertas













