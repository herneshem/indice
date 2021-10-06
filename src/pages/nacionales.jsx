import React, { Fragment } from "react";
import images from '../components/imgexport'



function Nacionales() {

    return (
<Fragment>
              

<div className="card mt-3 mb-3 " >
  <div className="row g-0 mx-3 pt-5">
    <div className="col-md-5 pt-5 pb-5"><p></p>
      <img src={images.img3} className="img-fluid rounded-start" alt="..."></img>
    </div>
    <div className="col-md-5 pt-5">
      <div className="card-body "><p></p>
        <h5 className="card-title">Card title</h5>
        <label htmlFor="" >Destinos  </label>
         <select name="" id="">
         <option value="">Madrid </option>
         <option value="">   Barcelona</option>
         <option value="">   Pais Vasco</option>
         <option value="">   Galicia</option>
         </select>

         <label htmlFor="" >Destinos  </label>
         <select name="" id="">
         <option value="">Madrid </option>
         <option value="">   Barcelona</option>
         <option value="">   Pais Vasco</option>
         <option value="">   Galicia</option>
         </select>
      </div>
    </div>
  </div>
</div>


         
        
         
</Fragment>

    )
}

export default Nacionales

