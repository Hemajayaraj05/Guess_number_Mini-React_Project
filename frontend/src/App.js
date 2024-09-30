import React from 'react';
import { useState } from 'react';
import './App.css';
import Result from './Result';
const secretNum=(Math.floor(Math.random()*10))+1;

function App() {
  const [number,setNumber]=useState();
  function handleChange(e){
    // e.preventDefault();
    setNumber(e.target.value);


  }
  return (
    <body>
    <h3>Welcome to My Guessing Game🫶</h3>
    <div className="container">
      
       <div className="head">
        <label>Guess the number between 1 to 10:</label>
        <input 
        type="number"
        id="number"
       value={number}
        onChange={handleChange}
        />
        <Result secretNum={secretNum} number={Number(number)}/>
       </div>
       
      
    </div>
    </body>
  );
}

export default App;
