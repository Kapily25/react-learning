import React from 'react';
import lg from './datas/logo.json'
function Topnavbar() {
    return (
        <div className="container nav_bar">
        
          <div className="left  logo">
            <img className='img' src={lg.mypic} alt="icon" />
            ADARSH ENGINEERING WORKS</div>
          <div className="right">
            <ul>
              <li href="" className='nav_items'>Home</li>
              <li href=""className='nav_items Drop'>Our Service
                <div className='Dropdown'>
                    <ul>
                    <a href="https://www.google.com/" className='DropNav'>Die</a>
                    <a href="" className='DropNav'>Plastic Die & Mould</a>
                    <a href="" className='DropNav'>Rubber Die & Mould</a>
                    <a href="" className='DropNav'>Job Work</a>
                    </ul>
                </div>
              </li>
              <li href="" className='nav_items'>About</li>
              <li href=""className='nav_items'>Contact</li>
              </ul>
          </div>
    </div>
    );
}

export default Topnavbar;
