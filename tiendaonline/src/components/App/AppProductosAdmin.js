import React from 'react';
import './App.css';
import {productos} from '../../data/dataProductos.js';
import { ProductosListAdmin } from '../productos/productosAdmin';
import Header from '../header/Header';
import { Footer } from '../footer/footer.js';


function ProductosAdmin() {
  return (
    <React.Fragment>
      <Header></Header> 
      
        <h1 className='App'>Productos</h1><br />
        <ProductosListAdmin
          productos = {productos}
        />
      
      <Footer></Footer>
    </React.Fragment>
  );
}

export default ProductosAdmin;

