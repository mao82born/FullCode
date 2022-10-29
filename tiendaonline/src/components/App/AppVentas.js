import React from "react";
import './App.css';
import { ventas } from "../../data/dataVentas";
import { VentasList } from "../ventas/ventas";
import Header from "../header/Header";
import { Footer } from '../footer/footer.js';


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

function Ventas() {
    return (
        <React.Fragment>
            <Header></Header>
            <div className="App">
                <h1>Ventas</h1>
                <VentasList
                    ventas={ventas}
                />
            </div>
            <br />
            <Footer></Footer>
        </React.Fragment>
    )
}

export default Ventas;