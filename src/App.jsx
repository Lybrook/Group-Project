import './App.css'
import FruitList from "./FruitList"
import { useState } from 'react';

function App() {
const fruits = [
  {id: 1,name: "Orange",color:"orange", cost: 20},
  {id: 2,name: "WaterMelon",color:"dark green", cost: 20},
  {id: 3,name: "StrawBerry",color:"red", cost: 20},
  {id: 4,name: "Lemon",color:"yellow", cost: 20},
  {id: 5,name: "BlueBerry",color:"purple", cost: 20},
  
];

  return (
    <>
    <h1>Fruit App</h1>
    <FruitList fruits={fruits} />  
    </>
  )
 
}

export default App