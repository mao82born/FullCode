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
    return <div>
                <table>
                    <tr>
                        <td><h2>{fecha}</h2></td>
                        <td><p>{idCliente}</p></td>
                        <td><p>{idVenta}</p></td>
                        <td><p>{valor}</p></td>
                        <td><p>{confirmado}</p></td>
                    </tr>
                </table>
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