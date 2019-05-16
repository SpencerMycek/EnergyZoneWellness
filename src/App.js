import React from 'react';
import logo from './media/images/logo.svg';
import './App.css';
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js';

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="wrapper">
                    <div className="section parallax bg1">
                        <h1>Hi</h1>
                    </div>
                    <div className="section static">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    <div className="section parallax bg2">
                        <h1>Hello</h1>
                    </div>
                    <Footer className="section static"/>
            </div>
        </div>
    );
}

export default App;
