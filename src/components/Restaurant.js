import React from 'react'
import { useEffect,useState } from 'react'
import Shimmer from './Shimmer';
import ItemCards from './ItemCards';
import { useParams } from 'react-router-dom';
import useRestaurantInfo from '../utils/RestaurantInfo';

const Restaurant = () => {

    

    const {resId}= useParams(); // jo name router me likha he vo hi use kare 
     

    
    const resInfo= useRestaurantInfo(resId); // Custom hook to fetch restaurant information

// 67385
//https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7442802&lng=75.8751487&restaurantId=67385&catalog_qa=undefined&submitAction=ENTER
//https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7442802&lng=75.8751487&restaurantId=73884&catalog_qa=undefined&submitAction=ENTER
  

    if(!resInfo) return <Shimmer/>; // Ensure data is available before accessing it
    const {name,cuisines, costForTwo, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info || {};

 
    const items= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [];
    if(!items || items.length === 0) return <h1>No items found</h1>;
    console.log(items);
    // console.log(items);

  return  (
    <div>
         <h1>{name}</h1>
         <h3>{cuisines.join(", ")}- {costForTwoMessage}</h3>

         <h1>Recommended</h1>
        
        <div className="restaurant-container">
        { items.map((item,index)=>{
            return <ItemCards key={index} props={item}/>
        
        })}
   </div>


          

    </div>

  )
}

export default Restaurant