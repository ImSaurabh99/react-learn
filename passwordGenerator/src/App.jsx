import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumber] = useState(true);
  const [charAllowed, setChar] = useState(true);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "`~!@#$%^&*(){}[]"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword])
 
  //function for copying to clipboard
  const copyToClipboard = useCallback(()=> {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 99 )
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator  ])

  return (
    <>
      <div className="w-full max-w-md bg-gray-500 p-4 rounded-md text-center mx-auto my-4">
        <div className="flex rounded-lg">
          <input 
          type="text" 
          value={ password }
          className="outline-none w-full py-1 px-3 rounded-l-md"
          placeholder='Password'
          readOnly
          ref={passwordRef}
          /> 
          <button onClick={copyToClipboard} className="bg-yellow-300 rounded-r-md p-2">
            Copy</button>
        </div>

        <div className='text-sm flex gap-x-2 mt-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {setLength(e.target.value)}} 
            />
            <label>Length: {length}</label>
          </div>

          <div>
            <input 
            type="checkbox"
            defaultChecked="{numberAllowed}"
            id="numberInput"
            onChange={(e) => {setNumber((prev) => !prev)}} 
            />
            <label>Numbers</label>
          </div>

          <div>
            <input 
            type="checkbox"
            defaultChecked="{charAllowed}"
            id="charInput"
            onChange={(e) => {setChar((prev) => !prev)}} 
            />
            <label>Charecters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
