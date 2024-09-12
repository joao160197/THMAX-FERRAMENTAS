import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PrismicProvider } from '@prismicio/react'
import { client } from './services/prismic';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <PrismicProvider client={client}>
    <App />
    </PrismicProvider>
  </React.StrictMode>
);

// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

