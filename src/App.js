import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import Button from "./components/Button/Button";
import { themes, activateTheme } from "./themes/themes";


function App() {
    const [theme, setTheme] = useState("");
    let themeIndex = 0;

    useEffect(() => {

    }, [theme]);

    const handleSubmit = () => {
        let theme = themes[Object.keys(themes)[1]];
        activateTheme(theme);
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <Button primary onClick={handleSubmit}>test</Button>
            </header>
        </div>
    );
}

export default App;
