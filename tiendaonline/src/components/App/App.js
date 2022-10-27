import React from 'react';
import './App.css';
import {productos} from '../../data/dataProductos.js';
import {ProductosList} from '../productos/productos.js';
import Header from '../header/Header';
import { Login } from '../login/login';

/*      
id: "GGOEAFKA087499",
urlImagen: "https://i.blogs.es/27b569/telefono/450_1000.jpeg",
nombre: "Android Small Removable Sticker Sheet",
descripcion: "Show your Android pride by placing these 8 fun stickers on your technology products or accessories!",
características: "<p>8 Android stickers</p>\n<p>White colored sticker sheet</p>",
precio
*/

function App() {
  return (
    <React.Fragment>
      <Header></Header> 
      <Login></Login>
    </React.Fragment>
  );
}

export default App;