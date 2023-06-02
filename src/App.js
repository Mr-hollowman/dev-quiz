import React, { useEffect, useState } from 'react'
import "./App.css"
import axios from 'axios';

export default function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios("https://restcountries.com/v3.1/all").then((res) => setData(res.data))
  }, [])
  console.log(data);
  return (
    <div className='app-container'>
      <div>
        <h2>Country Quiz</h2>
        <div className='quiz-card'>
          <h4>Delhi is the capital of</h4>
          <div className='options'>
            <span>A</span><span>India</span>
          </div>
          <div className='options'>
            <span>b</span><span>India</span>
          </div>
          <div className='options'>
            <span>c</span><span>India</span>
          </div>
          <div className='options'>
            <span>d</span><span>India</span>
          </div>
      </div>
    </div>
    </div >
  )
}
