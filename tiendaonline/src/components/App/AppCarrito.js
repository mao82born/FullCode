import React from "react";
import './App.css';
import { carrito } from "../../data/dataCarrito";
import { CarritoList } from "../carrito/carrito";
import Header from "../header/Header";
import { Footer } from '../footer/footer.js';


function Carrito() {
    return (
        <React.Fragment>
            <Header></Header>
            <div className="App">
                <h1>Carrito</h1>
                <CarritoList
                    carro = {carrito}
                />
            </div>
            <br />
            <Footer></Footer>
        </React.Fragment>
    )
}

export default Carrito;