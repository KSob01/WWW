import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import QuoteApp from './quote-of-the-day';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
      <h1>Kasia</h1>
      <QuoteApp />

  </React.StrictMode>
);

reportWebVitals();
