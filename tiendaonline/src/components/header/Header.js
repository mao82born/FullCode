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
                            <Link to='/'>Inicio</Link>
                        </li>
                        <li>
                            <Link to='/Productos'>Produstos</Link>
                        </li>
                        <li>
                        <Link to='/Ventas'>Ventas</Link>
                        </li>
                        <li><a href="#">Bootcamps</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                    </div>
                </nav>
            </section>

        </React.Fragment>
    )
}

export default Header;