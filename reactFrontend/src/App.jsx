import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([])

  function getData(){
    const response=fetch("http://localhost:4005/data")
              const res=await response.json();
              setData(res);
  }
  return (
    <>
      {JSON.stringify(data)}
    </>
  )
}

export default App
