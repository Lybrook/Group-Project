import './App.css'
import FruitList from "./FruitList"
import { useEffect, useState } from 'react';

function App() {
const [fruits,setfruits] = useState ([]);
  
useEffect(() => {
  fetch("http://localhost:5000/fruits")
    .then(response => response.json())
    .then(data => setFruits(data))
    .catch(error => console.error("Error fetching data:", error));
}, []);


  return (
    <>
    <h1>Fruit App</h1>
    <FruitList fruits={fruits} />  
    </>
  )
 
}

export default App