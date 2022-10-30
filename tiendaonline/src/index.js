import React from 'react';
import ReactDOM from 'react-dom/client';
import {render} from 'react-dom';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import Ventas from './components/App/AppVentas';
import Productos from './components/App/AppProductos';
import Carrito from './components/App/AppCarrito';
import ModificarProd from './components/App/AppModProd';
import 'bootstrap/dist/css/bootstrap.min.css';

/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);*/

const rootElement = document.getElementById('root');
render(
    <BrowserRouter>
        <Routes>
            <Route index element={<App />} />
            <Route path='Productos' element={<Productos />} />
            <Route path="ventas" element={<Ventas />} />
            <Route path="Carrito" element={<Carrito />} />
            <Route path="modificarProd" element={<ModificarProd />} />
        </Routes>
    </BrowserRouter>,
    rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
