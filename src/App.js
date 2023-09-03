import { Routes, Route } from "react-router-dom"
import Weather from "./screens/Weather";
import React from 'react'
import Home from "./screens/Home";
import Subcriptions from "./subscription";
import Subcriptions2 from "./subscription2";
import Subcriptions3 from "./subscription3";
import Subcriptions4 from "./subscription4";


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
