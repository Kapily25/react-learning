import React from 'react'
import experiance from './Data/experiance.json'
function Experiance() {
  return (
    <>
      <div className="container ex"id='experience'>
        <h1 className='exn'>EXPERIANCE</h1>
        {
          experiance.map((data) => {
            return (
              <>
                <div key={data.id} className="ex-itams my-5"
                data-aos="zoom-in"
                data-aos-duration="1000">
                  <div className="left">
                    <img src={data.imgSrc} style={{ height:"50px", width:"50px"}} alt="" />
                  </div>
                  <div className="right">
                    <h2>{data.role}</h2>
                    <h4><span style={{ color: "yellowgreen" }}>{data.startDate}{" "}{data.enddate},</span>{" "}
                    <span style={{color:"yellow"}}>{data.organisation}{" "}</span>
                    <span style={{color:"yellow"}}>{data.location}</span></h4>
                    <h5 style={{color:"yellow"}}>{data.experiance[0]}</h5>
                    <h5 style={{color:"yellow"}}>{data.experiance[1]}</h5>
                  </div>
                </div>
              </>
            );
          })
        }
      </div>
    </>
  )
}

export default Experiance