import React, { Fragment } from 'react'
import images from './imgexport'
import ReactDOM from 'react-dom'
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nacionales from '../pages/nacionales'
import Internacionales from '../pages/internacionales'
import Turisticos from '../pages/turisticos'
import { animateScroll as scroll } from "react-scroll";
import Mascotas from '../pages/mascotas'


class Ofertas extends React.Component {
  // Desplamiento hasta el borde inferior de la página
  onClickDown = () => {
    scroll.scrollToBottom();
  }
  // Desplamiento hasta el borde superior de la página
  onClickUp = () => {
    scroll.scrollToTop();
  }
  render() {
    return (


      <Router>

        {/* TARJETAS */}

        <div className="row  row-cols-md-2 g-4 bg-primary mx-5 pb-3">
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
          <div className="col">
            <div className="card">
              <div className="col-md-2 bg-white">
                <Link className="down" onClick={this.onClickDown} to="/internacionales"> <img src={images.img6} className="card-img-top bg-white" alt="..."></img></Link>

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
                <Link  className="down" onClick={this.onClickDown} to="turisticos"> <img src={images.img4} className="card-img-top" alt="..."></img></Link>
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
                <Link  className="down" onClick={this.onClickDown} to="./mascotas"> <img src={images.img5} className="card-img-top" alt="..."></img></Link>
              </div>
              <div className="card-body">
                <h5 className="card-title">Vuelos Mascotas</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural.</p>
              </div>
            </div>
          </div>
        </div>

        <Switch>

        <Route path="/" exact>
          <Ofertas/>
        </Route>  

          <Route path="/nacionales" >
            <Nacionales />
          </Route>

          <Route path="/internacionales" >
            <Internacionales />
          </Route>

          <Route path="/turisticos" >
            <Turisticos />
          </Route>

          <Route path="/mascotas">
            <Mascotas />
          </Route>

        </Switch>

      </Router>



    )
  }
}
export default Ofertas













