import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Main from "./Pages/Main/Main";
import {BrowserRouter} from "react-router-dom";
import NewAccount from "./Pages/NewAccount/NewAccount";
import Authentication from "./Pages/Authentication/Authentication";

function App() {
    return (
        <div className="App">
            {/*<BrowserRouter>*/}
            {/*    <Navbar />*/}
            {/*</BrowserRouter>*/}
            {/*<Main />*/}
            <NewAccount/>
            <Authentication/>
        </div>
    );
}

export default App;
