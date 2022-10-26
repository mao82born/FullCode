import React from "react";
import PropTypes from 'prop-types';
import './ventas.css';

/*
"fecha": "27/09/2022",
"idCliente": "111111",
"idVenta": "123",
"valor": 35,
"confirmado": true,
"detalleCompra": [
{
    "idProducto": "GGOEAFKA087599",
    "cantidad": 2
}
*/

export function VentasList({fecha, idCliente, idVenta, valor, confirmado, detalleCompra}){
    return <div >
                <h2>{fecha}</h2>
                <p>{idCliente}</p>
                <p>{idVenta}</p>
                <p>{valor}</p>
                <p>{confirmado}</p>
                <p>{detalleCompra.idProducto}</p>
                <p>{detalleCompra.cantidad}</p>
            </div>
}

VentasList.prototype = {
    detalleCompra: PropTypes.shape({
        idProducto: PropTypes.string,
        cantidad: PropTypes.number
    }),
    fecha: PropTypes.string.isRequired,
    idCliente: PropTypes.number.isRequired,
    idVenta: PropTypes.number.isRequired,
    valor: PropTypes.number.isRequired,
    confirmado: PropTypes.bool.isRequired
}

VentasList.defaultProps = {
    detalleCompra: {
        idProducto: 'No hay información',
        cantidad: 0
    }
}