import { useState, useCallback, useEffect, useRef } from 'react'
import React from 'react'



function App() {
  const[length, setLength] = useState(8)
  const[numberAllowed, setNumberAllowed] = useState(false);
  const[charAllowed, setCharAllowed] = useState(false);
  const[password, setPassword] = useState("")
  
  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
   let pass = ""
   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
   if(numberAllowed) str += "0123456789"
   if(charAllowed) str += "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
    
   for (let i = 1; i <= length; i++){
    let char = Math.floor(Math.random() * str.length +1) ;
    pass += str.charAt(char)
   }

  setPassword(pass)
  },[length, numberAllowed, charAllowed, setPassword])

  const copytoclipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

useEffect(()=>{
  passwordGenerator( )
},[length, numberAllowed, charAllowed, setPassword])
return (
    
      <div className='w-full h-40 max-w-lg mx-auto shadow-md
       rounded-lg px-4 my-2 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-3xl text-center py-6'>Password Generator</h1>
      <div className="flex shadow
      rounded-lg overflow-hidden"> 
      <input 
         type="text"
         value={password}
         className=' text-black outline-none w-full py-1 px-4 bg-white'
         placeholder='password'
         readOnly
         ref={passwordRef} />
      <button onClick={copytoclipboard} className='outline-none bg-blue-700 text-white 
          px-3 py- shrink-0'>copy </button>
        </div>
        
        <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1 text-xl'>
        <input 
        type="range"
        min={6}
        max={50}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1 text-xl">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1 text-xl">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
  )
}

export default App