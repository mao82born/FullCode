import React from "react";
import PropTypes from 'prop-types';
import './ventas.css';
import { Table } from "react-bootstrap";


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
            <div className="center">
            <Table striped bordered hover size="sm">
                <thead>
                    <tr className="color">
                        <th>Fecha</th>
                        <th>Id venta</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {ventas.map((item) => {
                        return (
                            
                                <tr>
                                    <td>{item.fecha}</td>
                                    <td>{item.idVenta}</td>
                                    <td>{item.valor}</td>
                                </tr>
                        
                        )
                    })}
                    <tr>
                        <td></td>
                        <td>Total</td>
                        <td>{ventas.map((item) => {
                            let suma = 0
                            return (
                                suma = suma + parseInt(item.valor)
                            )
                        })}</td>
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