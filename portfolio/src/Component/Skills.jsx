import React from 'react'
import skils from './Data/skils.json'
function Skills() {
  return (
     <>
            <div className="container skills">
                <h1 style={{textAlign:"left"}} >SKILS</h1>
                <div className="itams" >
                {skils.map((data) => (
                    <>
                            <div className="itam" key={data.id}>
                                <img src={data.imgsrc} alt="" />
                                <h3>{data.title}</h3>
                            </div>
                    </>
                ))}
                </div>
            </div>
        </>
  )
}

export default Skills