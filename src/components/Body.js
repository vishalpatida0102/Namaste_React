import React, { useEffect, useState } from 'react'
import Card from './Card'
import restaurantData from '../utils/restroData'
// import { useState } from 'react'

import '../../index.css'
import Shimmer from './Shimmer'

import { Link } from 'react-router-dom'

const Body=()=>
{
        const [filtered,setFiltered]=useState([]);
        const [filteredData,setFilteredData]=useState( []);
        const [searchText,setSearchText]=useState('');


        console.log('check behavior of rendering')

        const fetchdata=async ()=>
        {
              const data= await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7442802&lng=75.8751487&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
                // "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7442802&lng=75.8751487&restaurantId=419942&submitAction=ENTER"
      //  " https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=22.7442802&lng=75.8751487&carousel=true&third_party_vendor=1"

              );

              const json= await data.json()
              console.log(json);


              setFiltered(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
              setFilteredData(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
              console.log(json.data);
        }

        useEffect(()=>
        {
          fetchdata();
          console.log("data is fetched");
         
        },[]);


        // console.log(restaurantData);
        // console.log(restaurantData.info);
        // console.log(restaurantData.info.clodinaryImageId);


        if(filtered.length===0) return <Shimmer/>; // Ensure data is available before accessing it
        
        return(
                <div className='body-container'>
                        <div className='searchBar'>
                          <div className='search'>
                                <input type="text" placeholder="search a new.." value={searchText} onChange={(e)=>
                                  {
                                    setSearchText(e.target.value)
                                    }}
                                  />

                                <button className='search-btn' onClick={()=>
                                  {
                                    const searchData= filtered.filter((res)=>{
                                      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                                    
                                    })
                                    // setFiltered(searchData);
                                    // setSearchText(searchData);
                                    setFilteredData(searchData);
                                  }
                                }>Search</button>
                          </div>


                                <div className='filter-btn'>
 
                            <button className='btn' onClick={() =>
                             {
                                  let filteredData = filtered.filter(
                                     (car) => car.info.avgRating >4);
    
                                    setFiltered(filteredData);
                                    setFilteredData(filteredData);
    
                          }}
>
                            Top Rated Restro
                          </button>

                        </div>

                                
                        </div>

                        

                        <div className='restro'>
                            {/* <Card/>
                            <Card/>
                            <Card/>   this is not good practice
                            <Card/> */}


                            {/* <Card resData={rsList[0]}/>
                            <Card resData={rsList[1]}/> this is very tough to write so use Map or loop 
                             <Card resData={rsList[2]}/>
                              <Card resData={rsList[3]}/>  */}



                            {
                              filteredData.map((res)=>(
                                <Link key={res.info.id} 
                                to={"/restaurants/" + res.info.id}> <Card   resData={res}/> </Link>
                              ))
                            }
                        </div>
                </div>
        )
}

export default Body