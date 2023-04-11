import React, { Fragment } from "react";
import images from '../components/imgexport';
import '../App.css'



function Internacionales() {
// const destino = (event)=>{
//  const opt = document.querySelector('#destino');
//  const targ = opt.target

//   console.log(targ)
   
//}
function hand(e){
  const opt = document.querySelector('#destino');
  const lugares = document.querySelector('.lugares')
  opt.addEventListener("click", function(e){
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
         <option  value="">Madrid </option>
         <option id="barcelona" value="barcelona" >   Barcelona</option>
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
         <div className="lugares ">
      <img src={images.img6} className="img-fluid rounded-start" alt="..."></img>

         </div>
      </div>
      <button ><a href="/indice">Salir</a> </button> 
    </div>
    
  </div>
</div>


         
        
         
</Fragment>

    )
}

export default Internacionales