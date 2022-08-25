import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<<<<<<< HEAD
    <BrowserRouter>
    <App />
    </BrowserRouter>
=======
  <HashRouter>
    <App />
  </HashRouter>
>>>>>>> a6c8e8b6dfd7da936de74aec5e6e0e4fc56d7a6e
);
