
import './App.css'
import Navebar from './Component/Navebar'
import Home from './Component/Home'
import Experiance from './Component/Experiance'
import Skills from './Component/Skills'
import Project from './Component/Project'
import Contact from './Component/Contact'
import Aos from 'aos';
import "aos/dist/aos.css"
import React,{ useEffect } from 'react'
const App=()=> {
  useEffect(()=>{
    Aos.init();
  },[])

  return (
    <>
      <Navebar/> 
      <div className='container'>
      <Home />
      <Experiance />
      <Skills />
      <Project />
      <Contact/>
      </div>
    </>
  )
}
export default App