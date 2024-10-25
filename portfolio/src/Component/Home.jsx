import React from 'react'
import pdf1 from './Data/pdf1.json'
import mypic from './Data/mypic.json'
function Home() {
  return (
    <div className="container home">
      <div className="left">
        <h1>KAPIL HARISHCHANDRA YADAV
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