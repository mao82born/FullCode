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
import Header from './components/header/Header';
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
            <Route path='/' element={<Header />} />
            <Route path="App" element={<App />} />
            <Route path="ventas" element={<Ventas />} />
        </Routes>
    </BrowserRouter>,
    rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
