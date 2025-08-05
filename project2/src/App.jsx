import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    <>
    <div className="w-full h-screen"
    style= {{backgroundColor: color}}
    >
      <div className="fixed flex justify-between px-100 bottom-20">
        <button 
        onClick={() => setColor("red")}
        className="flex items-center justify-center rounded-lg w-40 h-10 text-xl border-2"
        style={{backgroundColor: "red"}}>Red</button>

          <button 
        onClick={() => setColor("blue")}
        className="flex items-center justify-center rounded-lg w-40 h-10 text-xl border-2"
        style={{backgroundColor: "blue"}}>Blue</button>

          <button 
        onClick={() => setColor("green")}
        className="flex items-center justify-center rounded-lg w-40 h-10 text-xl border-2"
        style={{backgroundColor: "green"}}>Green</button>

          <button 
        onClick={() => setColor("white")}
        className="flex items-center justify-center rounded-lg w-40 h-10 text-xl border-2"
        style={{backgroundColor: "white"}}>White</button>

          <button 
        onClick={() => setColor("pink")}
        className="flex items-center justify-center rounded-lg w-40 h-10 text-xl border-2"
        style={{backgroundColor: "pink"}}>Pink</button>

          <button 
        onClick={() => setColor("yellow")}
        className="flex items-center justify-center rounded-lg w-40 h-10 text-xl border-2"
        style={{backgroundColor: "yellow"}}>Yellow</button>
      </div>
    </div>
    </>
  )
}

export default App
