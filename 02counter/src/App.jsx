import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let counter = 5;
const addValue = () => {
 
  console.log("Value added",counter);
   counter += 1;
}
  return (
    <>
      <h1>Counter App</h1>
      <p>This is a simple counter application.</p>
      <h2>Counter: {counter}</h2>
      <button
      onClick={addValue}
      >Add value </button>
      <br />
      <button>remove value</button>
    </>
  )
}

export default App
