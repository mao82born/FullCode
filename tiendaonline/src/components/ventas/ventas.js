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

export function VentasList({ventas}) {
    return <React.Fragment>
        <div>
            <table className="border">

                <tr>
                    <th>Fecha</th>
                    <th>Id cliente</th>
                    <th>Id venta</th>
                    <th>Valor</th>
                    <th>Confirmación</th>
                </tr>
                {ventas.map((item, index) => {
                    return (
                        
                            <tr>
                                <td>{item.fecha}</td>
                                <td>{item.idCliente}</td>
                                <td>{item.idVenta}</td>
                                <td>{item.valor}</td>
                                <td>{item.confirmado === true ?"Verdadero":"Falso"}</td>
                            </tr>
                       
                    )
                })}

            </table>
        </div>
    </React.Fragment>
}

/*
VentasList.prototype = {
    
}

VentasList.defaultProps = {
    detalleCompra: {
        idProducto: 'No hay información',
        cantidad: 0
    }
}*/