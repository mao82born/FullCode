import React from "react";
import PropTypes from 'prop-types';
import './ventas.css';
import { Table } from "react-bootstrap";
import { useState, useEffect } from "react";

import Container from 'react-bootstrap/Container';


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

export function VentasList({ ventas }) {
    const [vSumTotal, setVSumTotal] = useState(0);
    useEffect(() => {
        const sumatoriaValor = () => {
            let suma = 0
            ventas.forEach(valor => {
                suma += valor.valor
                setVSumTotal(suma)
            });
        }
        sumatoriaValor()
    }, [])
    return <React.Fragment>
        <Container>
            <div className="center">
                <Table striped bordered hover size="sm" className="table">
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
                            <td>
                                {vSumTotal}
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </Container>
    </React.Fragment>
}
/*
export function SumaTotal({ventas}){
const [vSumTotal, setVSumTotal] = useState(0);
 useEffect(() => {
    const handlesumar = () => {
      const sumar = ventas.map((saldo) => parseFloat(saldo.valor))
        .reduce((previous, current) => {
          return previous + current;
        }, 0);
      setVSumTotal(sumar);
    };
    handlesumar();

    return (
 //Aqui va todo tu código, para mi ejemplo era una tabla que visualizaba todos los datos que me trae detalles por medio de un map.
        <p>
        {vSumTotal}  // El estado que visualiza la suma que se realizo en el UseEffect
        </p>
    )
});
}

{ventas.map((item) => {
                            let suma = 0
                            return (
                                suma += parseFloat(item.valor)
                                //typeof(item.valor)
                            )
                        })}
*/

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