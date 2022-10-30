import React from "react";
import { Link } from "react-router-dom";
import './Header.css';


const Header = () => {
    return (
        <React.Fragment>
            <section>
                <nav>
                    <div>
                    <ul>
                        <li>
                            <Link to='/' className="linkk">Inicio</Link>
                        </li>
                        <li>
                            <Link to='/productos' className="linkk">Productos</Link>
                        </li>
                        <li>
                            <Link to='/ventas' className="linkk">Ventas</Link>
                        </li>
                        <li>
                            <Link to='/modificarProd' className="linkk">Modificar</Link>
                        </li>
                        <li>
                            <Link to='/carrito' className="linkk">Carrito</Link>
                        </li>
                    </ul>
                    </div>
                </nav>
            </section>

        </React.Fragment>
    )
}

export default Header;