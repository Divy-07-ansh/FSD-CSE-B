import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([])

  async function getData(){
    const response=await fetch("http://localhost:4005/data",{method:"POST"})
              const res=await response.json();
              setData(res.msg);
  }
  getData()
  return (
    <>
      {JSON.stringify(data)}
    </>
  )
}

export default App
