import React from 'react';
import { getCookie } from '../../controllers/cookies';

import Lang from '../components/Lang';

import logo from '../assets/images/logo.svg';

function App() {
    const lang = require(`../constants/lang/${getCookie('_lang')}/Home.json`);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    {lang.edit1} <code>src/App.tsx</code> {lang.edit2}.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {lang['learn-react']}
                </a>
            </header>
            <Lang />
        </div>
    );
}

export default App;
