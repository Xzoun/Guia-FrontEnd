import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Ejercicio1 from './routes/ejercicio1';
import Ejercicio2 from './routes/ejercicio2';
import Ejercicio3 from './routes/ejercicio3';
import Ejercicio4 from './routes/ejercicio4';
import Ejercicio5 from './routes/ejercicio5';
import Ejercicio6 from './routes/ejercicio6';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/Guia-FrontEnd/react-guia" element={<App />}>
        <Route index element={<App />} />
        <Route path="Ejercicio1" element={<Ejercicio1 />} />
        <Route path="Ejercicio2" element={<Ejercicio2 />} />
        <Route path="Ejercicio3" element={<Ejercicio3 />} />
        <Route path="Ejercicio4" element={<Ejercicio4 />} />
        <Route path="Ejercicio5" element={<Ejercicio5 />} />
        <Route path="Ejercicio6" element={<Ejercicio6 />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);

reportWebVitals();

