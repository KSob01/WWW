import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {QuoteApp} from './QuoteApp';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <QuoteApp/>
    </React.StrictMode>
);

reportWebVitals();
