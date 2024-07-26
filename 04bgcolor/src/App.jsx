import { useState } from 'react'

function App() {
  const [color, setcolor] = useState("#0288")
  return (
    
    <div id="new"className='w-full h-screen duration-200'
    style={{backgroundColor:color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl'>
          <button
            onClick={()=>setcolor("red")}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
            style={{ backgroundColor: "Red" }}>Red</button>
          <button
          onClick={()=>{setcolor("green")}}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
          style={{backgroundColor:"green"}}>green</button>
          <button
            onClick={()=>{setcolor("blue")}}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
            style={{ backgroundColor: "blue" }}>blue</button>
           <button
            onClick={()=>{setcolor("olive")}}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
            style={{ backgroundColor: "olive" }}>olive</button>
           <button
            onClick={()=>{setcolor("gray")}}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
            style={{ backgroundColor: "gray" }}>gray</button>
           <button
            onClick={()=>{setcolor("yellow")}}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
            style={{ backgroundColor: "yellow" }}>yellow</button>
           <button
            onClick={()=>{setcolor("pink")}}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
            style={{ backgroundColor: "pink" }}>pink</button>
           <button
            onClick={()=>{setcolor("purple")}}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
            style={{ backgroundColor: "purple" }}>purple</button>
           <button
            onClick={()=>{setcolor("lavender")}}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
            style={{ backgroundColor: "lavender" }}>lavender</button>
           <button
            onClick={()=>{setcolor("white")}}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
            style={{ backgroundColor: "white" }}>white</button>
           <button
            onClick={()=>{setcolor("black")}}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
            style={{ backgroundColor: "black" }}>black</button>
           <button
            onClick={()=>{setcolor("#64b0fc")}}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
          style={{backgroundColor:"#64b0fc"}}>cyne</button>
        </div>
      </div>
    </div>
  )
}

export default App
