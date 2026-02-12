import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[data,setData]=useState([]);
  async function getFetchData(){
     const serverData=await fetch('http://localhost:4002/data');
          const jsonData=await serverData.json();
          setData(jsonData.msg);

  }

  return (
    <>
     <h2>Welcome to Node Fetch API</h2> 
     {JSON.stringify(data)}
     <button onClick={getFetchData}>fetchdata</button>
    </>
  )
}

export default App
