import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [counter, setCounter] = useState(0)

  //let counter = 15;

  const addvalue = () => {
    console.log("Add Clicked", counter);
    // counter = counter + 1;
    setCounter(counter + 1);
  }

  const removeValue = () => {
    console.log("Remove Clicked", counter);
    // counter = counter - 1;
    setCounter(counter - 1);
  }

  return (
    <>
      <div className="flex justify-between">
        <h1 className="bg-green-400 mb-4 p-4 rounded-md">This is counter project</h1>
        <h2 className="bg-yellow-300 mb-4 p-4 rounded-md">Counter value {counter}</h2>
      </div>
      

      <button className="bg-red-300 rounded-md p-2" onClick={addvalue} disabled={counter == 20}>Add value</button>
      <button className="rounded-md bg-yellow-200 p-2 ml-4" onClick={removeValue} disabled={counter == 0}>Remove value</button>

      <div className="flex justify-center mt-4 gap-4">
        <Card username="Saurabh" btnTxt='Click here'/>
        <Card username="Sahil"/>
      </div>
      
    </>
  )
}

export default App
