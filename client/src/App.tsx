import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Main from "./Pages/Main/Main";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>
        <Main />
    </div>
  );
}

export default App;
