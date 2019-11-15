import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: ['Unica One', 'cursive']
    }
});

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));


