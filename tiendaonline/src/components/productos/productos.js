import React from "react";
import PropTypes from 'prop-types';
import './productos.css';

/*      
id: "GGOEAFKA087499",
urlImagen: "https://i.blogs.es/27b569/telefono/450_1000.jpeg",
nombre: "Android Small Removable Sticker Sheet",
descripcion: "Show your Android pride by placing these 8 fun stickers on your technology products or accessories!",
características: "<p>8 Android stickers</p>\n<p>White colored sticker sheet</p>",
precio
*/

export function ProductosList({id, urlImagen, nombre, descripcion, features, precio}){
    return <div className="imgProducto">
            
                <h2>{nombre}</h2>
                <img src={urlImagen} className="imgProducto"></img>
                <p>{nombre}</p>
                <p>{descripcion}</p>
                <p>{features}</p>
                <p>{precio}</p>
            
    </div>
}

ProductosList.proptype = {
    id: PropTypes.number.isRequired, 
    urlImagen: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    features: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired
}