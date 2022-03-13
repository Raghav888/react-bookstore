import "./App.css";
import React from "react";
import { Route, Routes } from "react-router";
import MockMan from "mockman-js"

function App() {
  return (
    <div className="App">
   
      <Routes>
          <Route path="/mockman" element={ <MockMan/>}/>
      
      </Routes>
    </div>
  );
}

export default App;
