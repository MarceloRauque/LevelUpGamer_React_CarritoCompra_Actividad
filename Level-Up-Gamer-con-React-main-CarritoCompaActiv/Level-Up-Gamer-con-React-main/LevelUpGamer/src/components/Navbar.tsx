// src/components/Navbar.tsx

import React from 'react';
import { NavLink } from "react-router-dom"

// Definimos la interfaz de props para recibir totalItems
interface NavbarProps {
  totalItems: number;
}

// Recibimos la prop totalItems
export const Navbar: React.FC<NavbarProps> = ({ totalItems }) => {
  return (
    <>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top shadow">
            <div className="container">
            <a className="navbar-brand fw-bold orbitron text-verde text-shadow" href="#inicio">LEVEL-UP GAMER</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
            <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav ms-auto">
            <li>
            <NavLink to="/" className="nav-link">
                  Inicio
                </NavLink>
            </li>
            <li className="nav-item"><a className="nav-link" href="#blog">Noticias</a></li>
            <li className="nav-item"><a className="nav-link" href="#contacto">Contacto</a></li>
            <li><NavLink to="/products" className="nav-link">
                  Productos
                </NavLink></li>
            <li>
            <NavLink to="/Login" className="nav-link">
                  Iniciar sesión
                </NavLink>
            </li>
            
            {/* --- CARRITO CON CONTADOR INTEGRADO --- */}
            <li className="nav-item navbar-cart-item" >
            <NavLink to="/cart" className="nav-link cart-link">
                🛒
                {/* Muestra el contador solo si hay ítems */}
                {totalItems > 0 && (
                    <span className="cart-count">
                        {totalItems}
                    </span>
                )}
            </NavLink>
            </li>
            {/* ---------------------------------------------------- */}
        </ul>
        </div>
        </div>
    </nav>

    </>
  )
}