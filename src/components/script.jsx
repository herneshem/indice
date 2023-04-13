import React, { Fragment } from "react";
import images from '../components/imgexport';
import '../stilo.css';
import '../App.css';



    function Script(){
      function hand(e) {
        const opt = document.querySelector('#destino');
        const lugares = document.querySelector('.lugares')
        opt.addEventListener("click", function (e) {
          lugares.classList.add('lugaresvisible');
          console.log(e.target[2])
    
        })

    }
 
    }
   

  export default Script
  export function hand(e){}
