import { Routes, Route } from "react-router-dom"
import Weather from "./screens/Weather";
import React from 'react'
import Home from "./screens/Home";
import Premium from "./screens/Premium";
import Information from "./screens/Information";
function App() {
  return (  
    <div>
        <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/weather" element={ <Weather/> } />   
        <Route path="/information" element={ <Information/> } />   
        <Route path="/premium" element={<Premium/>}/>     
      </Routes>
      </div>
  );
}

export default App;
