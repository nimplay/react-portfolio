import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeContextProvider } from './Context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>,
);


