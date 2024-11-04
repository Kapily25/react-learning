import React from 'react'

function Navebar() {
  return (
    <>
      <div className="container nav_bar"
      data-aos="fade-down"
      data-aos-duration="1000"
      >
          <div className="left nav_items">Portfolio</div>
          <div className="right">
              <a href="" className='nav_items'>Home</a>
              <a href="" className='nav_items'>Experience</a>
              <a href=""className='nav_items'>Skills</a>
              <a href=""className='nav_items'>Project</a>
              <a href=""className='nav_items'>Contact</a>
          </div>
    </div>
    </>
  )
}

export default Navebar