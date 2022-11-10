import React from 'react';
import { Table } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';

export function SalesList({ ventas }) {
  const [vSumTotal, setVSumTotal] = useState(0);
  useEffect(() => {
    const sumatoriaValor = () => {
      let suma = 0;
      ventas.forEach((valor) => {
        suma += valor.valor;
        setVSumTotal(suma);
      });
    };
    sumatoriaValor();
  }, []);
  return (
    <React.Fragment>
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
                );
              })}
              <tr>
                <td></td>
                <td>Total</td>
                <td>{vSumTotal}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
    </React.Fragment>
  );
}
