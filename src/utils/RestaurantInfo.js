
import React from 'react';
import { useState } from 'react';
import { MANU_LINK } from '../utils/links';
import { useEffect } from 'react';

// This custom hook fetches restaurant information based on the provided restaurant ID (resId).
// It uses the MANU_LINK constant to construct the API endpoint and fetches data from it

// ye hmne custom hook banaya he jo restaurant ki information ko fetch karega
// ise banane ka fayda  reusability, modularity, and separation of concerns he, easy to test and maintain

const RestaurantInfo=(resId)=>{

     
    const [resInfo,setResInfo]=useState(null);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData= async ()=>{
        try {
             
            const data=await fetch(`${MANU_LINK}${resId}`);
            const json= await data.json();

            setResInfo(json.data);

        } catch (error) {
            
        }
    }

    return resInfo;

}

export default RestaurantInfo;