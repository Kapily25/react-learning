import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Typed from 'typed.js'
function App() {
  // const [count, setCount] = useState(0)
  const typedRef=useRef(null)
  useEffect(() => {

    const options={
      String:["Welcome to my ","I am Kapil","I am frontend Devloper"],
      typespeed:50,
      backspeed:50,
      loop:true 
    }
    const typed = new typed(typedRef.current,options)
    return () => {
      typed.destroy()
    };
  }, [])

  return (

      <>
      <div>
        <h1 ref={typedRef}> nsjfsdk</h1>
      </div>
      </>
  )
}

export default App
