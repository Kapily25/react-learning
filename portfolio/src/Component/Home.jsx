import React, { useEffect, useRef} from 'react'
import pdf1 from './Data/pdf1.json'
import mypic from './Data/mypic.json'
import Typed from 'typed.js';
function Home() {
  const el=useRef(null)
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Welcome To My Profile', 'I am Kapil Harishchandra Yadav','I am frontend Devloper'],
      typeSpeed: 50,
      backSpeed:50,
      loop:true
    });
    return () => {
      typed.destroy()
    };
  }, [])
  
  return (
    <div className="container home">
      <div className="left"
      data-aos="fade-up-right"
      data-aos-duration="1000">
        <h1 ref={el}>
        </h1>
        <a href={pdf1.pdf} download="KapilResume.pdf" className="btn btn-outline-warning my-3">Downlode Ressume</a>
      </div>
      <div className="right"
      data-aos="fade-up-left"
      data-aos-duration="1000">
        <div className="img">
          <img src={mypic.icon} alt="icon"/>
        </div>
      </div>
    </div>
    
  )
}

export default Home