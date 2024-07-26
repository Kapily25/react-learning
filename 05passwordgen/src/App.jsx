import { useRef } from 'react';
import { useEffect } from 'react';
import { useState, useCallback} from 'react';




function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAlloud] = useState(false);
  const [charAllowed, setCharAlloud] = useState(false);
  const [password, setPassword] = useState("");

const passwordRef=useRef(null)

  const paswordgenerator=useCallback(
    () => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if (numberAllowed) str += "1234567890"
      if (charAllowed) str += "~`!@#$%^&*_+-={}[]"
      for (let i = 1; i <=length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass +=str.charAt(char)
        
      }
      setPassword(pass)
    },
    [length,numberAllowed,charAllowed,setPassword],
  )
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
  paswordgenerator()
  }, [length, numberAllowed, charAllowed, paswordgenerator])
  
  
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg  py-3 px-4 text-1xl my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
          ref={passwordRef}/>
          <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>COPY</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex text-center gap-x-1'>
            <input type="range"
              min={8}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label>length:{length}</label>
          </div>
          <div className='flex text-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumberAlloud((prev) => !prev);
            }}
            />
            <label>Numbers</label>
          </div>
          <div className='flex text-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setCharAlloud((prev) => !prev);
            }}
            />
            <label>Charecter</label>
          </div>
          </div>
      </div>
    </>
  )
}

export default App
