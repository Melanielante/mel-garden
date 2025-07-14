// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import React from "react";
import Home from "./components/Home";
import PlantList from "./components/PlantList";
import plantData from "./data";


function App() {
  

  return (
    <>
       <div className='App'>
          <h1>Hello from Mel Garden </h1>
          <Home username="MEL" favoritePlant="Aloe" />
          <PlantList plants={plantData} />
       </div>
      
    </>
  )
}

export default App;
