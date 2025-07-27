import React from 'react'
 import '../../index.css'
import { baseUrl } from '../utils/links'

const Card=({resData})=>{

        // const {resData}=props;
        const {
                name,cloudinaryImageId,avgRating,cuisines,costForTwo
        }=resData.info;
        
//         console.log(baseUrl); // Should print the Swiggy CDN base URL ending with /
// console.log(cloudinaryImageId); // Should print a string, not undefined or an object
// console.log(baseUrl + cloudinaryImageId); // Try pasting this URL in your browser
 
console.log(costForTwo)
        

        return(
                <div className='container'>
              <div className="card">
      <img src={baseUrl + cloudinaryImageId}  /> 

      <div className="card-content">
        <div className="restro-name">{name}</div>
        <div className="cusine">{cuisines.join(", ")}</div>
        <div className="rating">⭐ {avgRating}</div>
        <div className="cost">{costForTwo}</div>
      </div>
    </div>
    </div>
                
        )
}

export default Card