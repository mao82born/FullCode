import React from "react";
import './App.css';
import { ventas } from "../../data/dataVentas";
import { VentasList } from "../ventas/ventas";

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

function Ventas(){
    return(
        <div>
            <h1>Ventas</h1>
            {ventas.map(h => (
                <VentasList 
                    key = {h.fecha}
                    fecha = {h.fecha}                
                    idCliente = {h.idCliente}
                    idVenta = {h.idVenta}
                    valor = {h.valor}
                    confirmado = {h.confirmado}
                    detallecompra = {h.detalleCompra}
                />
            ))}
        </div>
    )
}

export default Ventas;