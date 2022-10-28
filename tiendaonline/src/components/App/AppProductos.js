import React from 'react';
import './App.css';
import {productos} from '../../data/dataProductos.js';
import {ProductosList} from '../productos/productos.js';
import Header from '../header/Header';
import { Footer } from '../footer/footer.js';

/*      
id: "GGOEAFKA087499",
urlImagen: "https://i.blogs.es/27b569/telefono/450_1000.jpeg",
nombre: "Android Small Removable Sticker Sheet",
descripcion: "Show your Android pride by placing these 8 fun stickers on your technology products or accessories!",
características: "<p>8 Android stickers</p>\n<p>White colored sticker sheet</p>",
precio
*/

function Productos() {
  return (
    <React.Fragment>
      <Header></Header> 
      <div className="wrapper">
        <h1>Productos</h1>
        {productos.map(h => (
            <ProductosList 
              key = {h.name}
              id = {h.id}
              urlImagen = {h.urlImagen}
              nombre = {h.nombre}
              descripcion = {h.descripcion}
              features = {h.features}
              precio = {h.precio}
            />
          ))
        }
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default Productos;
