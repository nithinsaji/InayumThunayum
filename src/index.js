import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppContainer from './AppContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>{/* basename='/InayumThunayum' "homepage": "https://nithinsaji.github.io/InayumThunayum",*/}
        <Routes >
          <Route  path="/*" element={<AppContainer />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
