import React, { useEffect, useState } from 'react'
import "./App.css"
import axios from 'axios';

export default function App() {
  const [data, setData] = useState(null);
  useEffect(()=>{
    axios("https://restcountries.com/v3.1/all").then((res)=>setData(res.data))
  },[])
  console.log(data);
  return (
    <div className='app-container'>
      
    </div>
  )
}
