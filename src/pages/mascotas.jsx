import React, { Fragment } from "react";
import images from '../components/imgexport';
import '../App.css';

function Mascotas() {
  function hand(e) {
    const opt = document.querySelector('#destino');
    const lugares = document.querySelector('.lugares')
    opt.addEventListener("click", function (e) {
      lugares.classList.add('lugaresvisible');
      console.log(e.target[2])

    })
  }
  return (
    <Fragment>


      <div className="card mt-3 mb-3 " >
        <div className="row g-0 mx-3 pt-5">
          <div className="col-md-5 pt-5 pb-5 "><p></p>
            <img src={images.img5} className="img-fluid rounded-start" alt="..."></img>
          </div>
          <div className="col-md-7 pt-1">
            <div className="card-body "><p></p>
              <h5 className="card-title">Card title</h5>
              <div className="choose chooseresp">
                <label htmlFor="" >Destinos  </label>
                <select name="" id="" className="mx-5">
                  <option value="">Madrid </option>
                  <option value="">   Barcelona</option>
                  <option value="">   Pais Vasco</option>
                  <option value="">   Galicia</option>
                </select>
                <label htmlFor="" >Destinos  </label>
                <select name="" id="destino" className="mx-5" onClick={hand}>
                  <option value="madrid" id="madrid" >Madrid </option>
                  <option value="barcelona"> Barcelona</option>
                  <option value="pais">   Pais Vasco</option>
                  <option value="galicia">   Galicia</option>
                </select>
              </div>
              <div className="lugares ">
                <br />
                {/* <img src={images.img6} className="img-fluid rounded-start" alt="..."></img> */}
                <form action="POST" className="formulario">
                  <label for="num-personas">¿Cuántas personas viajarán?</label>
                  <input type="number" min={1} id="quantity" name="num-personas" required></input>
                  <label for="num-personas">¿Cuántas mascotas viajarán?</label>
                  <input type="number" id="quantity" min={1} name="num-personas" required></input>
                  <label htmlFor="" >¿Que mascota soy?  </label>
                  <select name="" id="destino" className="mx-5">
                    <option value="madrid" id="madrid" >Gatito </option>
                    <option value="barcelona"> Perrito</option>
                    <option value="pais"> Pajarito</option>
                    <option value="galicia">Algo exótico</option>
                  </select>

                  <label for="num-dias">¿Cuántos días durará el viaje?</label>
                  <input type="number" id="quantity" min={1} name="num-dias" required></input>
                  <label for="hay-ninos">¿Hay niños menores?</label>
                  <input type="checkbox" id="hay-ninos" name="hay-ninos"></input>
                  <button type="submit">Enviar</button>
                </form>
              </div>
            </div>
          </div>
          <div className="align-bot ">
          <a href="/indice"><button className="btn btn-outline-success btn-sm " type="button" >Subir </button></a>
          </div>
        </div>
      </div>

      <script src="/script.js"></script>
    </Fragment>

  )

}

export default Mascotas