import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Ejercicio1 from './routes/ejercicio1';
import Ejercicio2 from './routes/ejercicio2';
import Ejercicio3 from './routes/ejercicio3'
import Ejercicio4 from './routes/ejercicio4';
import Ejercicio5 from './routes/ejercicio5';
import Ejercicio6 from './routes/ejercicio6'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/guia-react" element={<App />} />
      <Route path="/guia-react/Ejercicio1" element={<Ejercicio1 />} />
      <Route path="/guia-react/Ejercicio2" element={<Ejercicio2 />} />
      <Route path="/guia-react/Ejercicio3" element={<Ejercicio3 />} />
      <Route path="/guia-react/Ejercicio4" element={<Ejercicio4 />} />
      <Route path="/guia-react/Ejercicio5" element={<Ejercicio5 />} />
      <Route path="/guia-react/Ejercicio6" element={<Ejercicio6 />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
