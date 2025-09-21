import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {

  const [counter ,setCounter] = useState(5)
  // const [name,setName] = useState("John")


const removeValue = () => {
  console.log("Value removed", counter);
  setCounter(counter - 1);
  if(counter<=0){
    setCounter(0)
  }
  // counter -= 1;
}
 
// let counter = 5;
const addValue = () => {
 
  console.log("Value added",counter);
  setCounter(counter + 1)


  //  counter += 1;
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
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
