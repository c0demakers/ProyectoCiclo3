import React from 'react'
import logo from "../media/logo.png"

const Navpar = () => {
    return (
        <div>
            
        <ul className="navbar">
            <li>
                <img className= "logo" src= {logo} alt="imagen" />
            </li>
            <li>
                <button className="button botonPrincipal">Gestion de ventas</button>
            </li>
            <li>
                <button className="button botonPrincipal">Gestion de productos</button>
            </li>
            <li>
                <button className="button botonPrincipal">Gestion de usuarios</button>
            </li>
            <li>
                <button className="button botonPrincipal">Salir</button>
            </li>
        </ul>
    
        </div>
    )
}

export default Navpar;
