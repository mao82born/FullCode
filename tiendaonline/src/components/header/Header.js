import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <nav>
            <div>
            <ul>
				<li><a href="#">Inicio</a></li>
				<li><a href="#">Productos</a></li>
				<li><a href="#">Ventas</a></li>
				<li><a href="#">Bootcamps</a></li>
				<li><a href="#">Contacto</a></li>
			</ul>
            </div>
        </nav>
    )
}

export default Header;