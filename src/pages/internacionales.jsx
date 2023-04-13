import React, { Fragment } from "react";
import images from '../components/imgexport';
import '../App.css';



function Internacionales() {
  
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
          <div className="col-md-5 pt-5 pb-5"><p></p>
            <img src={images.img6} className="img-fluid rounded-start" alt="..."></img>
          </div>
          <div className="col-md-5 pt-5 ">
            <div className="card-body "><p></p>
              <h5 className="card-title mb-3">Card title</h5>
              <label htmlFor="" className="" >Origen  </label>
              <select name="" id="origen" className="mx-5">
                <option value="">Madrid </option>
                <option id="barcelona" value="barcelona" >   Barcelona</option>
                <option value="">   Pais Vasco</option>
                <option value="">   Galicia</option>
              </select>

              <label htmlFor="" >Destinos  </label>
              <select name="" id="destino" className="mx-5" onClick={hand}>
                <option value="madrid" id="madrid" >Francia </option>
                <option value="barcelona"> Italia</option>
                <option value="pais"> Alemania</option>
                <option value="galicia">Portugal</option>
              </select><br />
              <div className="lugares ">
                {/* <img src={images.img6} className="img-fluid rounded-start" alt="..."></img> */}
                <form action="">
                <label for="num-personas">¿Cuántas personas viajarán?</label>
                <input type="number" id="num-personas" name="num-personas" required></input>
                <label for="num-dias">¿Cuántos días durará el viaje?</label>
                <input type="number" id="num-dias" name="num-dias" required></input>
                <label for="hay-ninos">¿Hay niños menores?</label>
                <input type="checkbox" id="hay-ninos" name="hay-ninos"></input>
                <button type="submit">Enviar</button>
                </form>
              </div>
            </div>
          </div>
          <div className="align-bot">
          <button className="btn btn-outline-success btn-sm " type="button" ><a href="/indice">Subir</a> </button>
          </div>

        </div>
      </div>





    </Fragment>

  )
}

export default Internacionales
export function hand(){}