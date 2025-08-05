import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(10)

  const addvalue = () => {
    if (counter >= 20) {
      console.log("Can't Add");
      return;
    }
    setCounter(counter + 1);
  }

  const subvalue = () => {
    if (counter <= 0) {
      console.log("Can't Sub");
      return;
    }
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Hello World</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addvalue}>
        Add Value{counter}</button>
      <br />
      <button onClick={subvalue}>
        Sub Value{counter}</button>
    </>
  )
}

export default App
