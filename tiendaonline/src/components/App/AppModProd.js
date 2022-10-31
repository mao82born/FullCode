import React from "react";
import './App.css';
import { productos } from "../../data/dataProductos";
import { ModificarP } from "../modificarProd/modificarProd";
import Header from "../header/Header";
import { Footer } from '../footer/footer.js';


function ModificarProd() {
    return (
        <React.Fragment>
            <Header></Header>
            <div className="App">
                <h1>Modificar</h1>
                <ModificarP
                    productos = {productos} 
                />
            </div>
            <br />
            <Footer></Footer>
        </React.Fragment>
    )
}

export default ModificarProd;