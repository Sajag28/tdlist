import React, { useState, useEffect } from "react";
import axios from 'axios';

const Location = () => {
  const API_endpoint=`https://api.openweathermap.org/data/2.5/weather?`
  const API_key='de4054b4610db8dac3ea1686daa31205'
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude]= useState('');
  const [city,setCity]=useState('')
   useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    })
    console.log(`${API_endpoint}lat=${latitude}&lon${longitude}&appid=${API_key}`)
      
axios.get(`${API_endpoint}lat=${latitude}&lon${longitude}&appid=${API_key}`).then((response)=>{
          setCity(response.name);
          console.log(response.data)
        })
  },[])
  
  return (
    <div>
      <h1>Your current location is:</h1>
      <p>
        City: {city}
        <br />
        Latitude: {latitude}
        <br />
        Longitude: {longitude}
      </p>
    </div>
  );
};

export default Location;
