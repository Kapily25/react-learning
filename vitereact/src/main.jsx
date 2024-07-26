import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
const user="kapil yadav harishchandr"//user varibale

function Myapp() {
  return (
    <div>
      <h1>this is me direct create function in main file{user }</h1>
    </div>
  )
}
// const newanotherElement = React.createElement(
//   'a',
//   { href: "https://google.com", target: "_blank" },
//   "we are vist google",
//   user//user varibale 
// )
// const anotherElement = (
//   <a href='https://google.com' target="_blank">we can visit google</a>
// )
ReactDOM.createRoot(document.getElementById('root')).render(
  // anotherElement
  <React.StrictMode>
    <Myapp/>
    <App />
  </React.StrictMode>
)
