import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'; // Import the createRoot function
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  // <React.StrictMode>
  <BrowserRouter basename="goit-react-woolf-hw-05-movies">
    <App />
  </BrowserRouter>
  // </React.StrictMode>,
);
