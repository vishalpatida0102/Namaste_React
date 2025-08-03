import React from 'react';
import { useState, useEffect } from 'react';


const UseOnlineOffline = () => {

    const [isOnline,setOnline]=useState(true);


    useEffect(()=>{
        window.addEventListener("online",()=>{
            setOnline(true);
        })

        window.addEventListener("offline",()=>{
            setOnline(false);
        })
    })

    return isOnline;
}


export default UseOnlineOffline