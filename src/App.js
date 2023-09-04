import { Routes, Route } from "react-router-dom"
import Weather from "./screens/Weather";
import React from 'react'
import Home from "./screens/Home";
import Subcriptions from "./subscription";



function App() {
  return (  
    <div>
        <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/weather" element={ <Weather/> } />    
        <Route path="/subscription" element={<Subcriptions/>}/>   
       
      </Routes>
      </div>
  );
}

export default App;
