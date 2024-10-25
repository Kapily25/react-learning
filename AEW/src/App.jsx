import { useState } from 'react'
// import Nave from './component/Nave'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Topnavbar from './component/Topnavbar'
import Slideshow from './component/Slideshow';

function App() {
  

  return (
    <><div>
    {/* <Nave/> */}
    <Topnavbar/>
    <br/>
    <Slideshow/>
    </div>

    </>
  )
}

export default App
