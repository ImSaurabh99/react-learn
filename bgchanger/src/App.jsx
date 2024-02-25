import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    <div className="w-full h-screen duration-200"
      style={{backgroundColor : color}}>
      <div className="flex justify-center gap-3">
          <button onClick={() => setColor('red')} className="p-3 rounded-xl bg-red-600">Red</button>        
          <button onClick={() => setColor('green')} className="p-3 rounded-xl bg-green-600">Green</button>
          <button onClick={() => setColor('blue')} className="p-3 rounded-xl bg-blue-600">Blue</button>
          <button onClick={() => setColor('gray')} className="p-3 rounded-xl bg-gray-600">Gray</button>
          <button onClick={() => setColor('yellow')} className="p-3 rounded-xl bg-yellow-600">Yellow</button>
          <button onClick={() => setColor('pink')} className="p-3 rounded-xl bg-pink-600">Pink</button>
          <button onClick={() => setColor('purple')} className="p-3 rounded-xl bg-purple-600">Purple</button>
          <button onClick={() => setColor('white')} className="p-3 rounded-xl bg-white text-black border border-solid">White</button>
          <button onClick={() => setColor('black')} className="p-3 rounded-xl bg-black text-white">Black</button>
        </div>
    </div>
      
    </>
  )
}

export default App
