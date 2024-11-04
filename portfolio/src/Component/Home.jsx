import React, { useEffect, useRef} from 'react'
import pdf1 from './Data/pdf1.json'
import mypic from './Data/mypic.json'
import typed from 'typed.js'
function Home() {
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
    <div className="container home">
      <div className="left">
        <h1 ref={typedRef}>
        </h1>
        <a href={pdf1.pdf} download="KapilResume.pdf" className="btn btn-outline-warning">Downlode Ressume</a>
      </div>
      <div className="right">
        <div className="img">
          <img src={mypic.icon} alt="icon"/>
        </div>
      </div>
    </div>
    
  )
}

export default Home