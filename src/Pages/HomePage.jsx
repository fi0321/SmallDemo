import React, { useEffect, useState } from 'react'
import jsonData from '../Data/Data.json';
const API_URL_W = 'https://api.openweathermap.org/data/2.5/weather?';


const HomePage = () => {
 const[cityTemp,setCityTemp]=useState();

 
 const InfoData=jsonData.cities;
 const [city, setCity]=useState(InfoData.find(item=> item.city==="New York"));
 

  const load = async (name, key) => {
    const response = await fetch(
      API_URL_W +
        new URLSearchParams({
          lon: name.longitude,
          lat: name.latitude,
          appid: '56a7c71b23b3e9121b49dade5e8fa4c7',
          units:'Metric'
        })
    );
    const data = await response.json();
    setCityTemp(data.main.temp);
  };
  useEffect(()=>{
   load(city, process.env.REACT_APP_WEATHER_API_KEY);
  },[city]);


  return (
    <div className='flex justify-center items-center border h-screen bg-black '> 
    <div className=' bg-red-900 text-white rounded-full p-5 font-semibold'>
     The temperature in {city.city} is  {cityTemp} °C
     </div></div>
  )
}

export default HomePage