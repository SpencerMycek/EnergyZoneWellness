import React from 'react';
import logo from './media/images/logo.svg';
import './App.css';

function App() {
    return (
        <div class="Main">
            <div className="Navbar">Navbar</div>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        Learn React
                    </a>
                </header>
            </div>
            <div className="Footer">Footer</div>
        </div>
    );
}

export default App;
