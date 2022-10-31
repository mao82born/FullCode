import React from "react";
import './carrito.css';
import { Table } from "react-bootstrap";
import Carrito from "../App/AppCarrito";


/*
        "urlImagen": "https://i.blogs.es/27b569/telefono/450_1000.jpeg",
        "nombre": "Android Small Removable Sticker Sheet",
        "cantidad": 3,
        "precio": "9"
*/

export function CarritoList({carro}) {
    return <React.Fragment>
            <div className="center">
            <Table striped bordered hover size="sm">
                <thead>
                    <tr className="colortr">
                        <th>Imagen</th>
                        <th>Cantidad</th>
                        <th>Producto</th>
                        <th>Valor</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {carro.map((item) => {
                        return (
                                <tr>
                                    <td><img src={item.urlImagen} className="size"></img></td>
                                    <td>{item.nombre}</td>
                                    <td>{item.cantidad}</td>
                                    <td>{item.precio}</td>
                                </tr>
                        )
                    })}
                    <tr>
                        <td></td>
                        <td>Total</td>
                        <td>0</td>
                    </tr>
                </tbody>
            </Table>
            </div>
    </React.Fragment>
}

/*
{ventas.map((item, index) => {
                        return (
                            
                                <tr>
                                    <td>{item.fecha}</td>
                                    <td>{item.idVenta}</td>
                                    <td>{item.valor}</td>
                                    <td>{item.idCliente}</td>
                                    <td>{item.confirmado === true ?"Verdadero":"Falso"}</td>
                                </tr>
                        
                        )
                    })}
*/

/*
VentasList.prototype = {
    
}

VentasList.defaultProps = {
    detalleCompra: {
        idProducto: 'No hay información',
        cantidad: 0
    }
}*/