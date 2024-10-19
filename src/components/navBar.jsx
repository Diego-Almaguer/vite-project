import React, { useState } from 'react';
import './NavBar.css';

function NavBar() {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <a href="/">
                    <img src="logo.png" alt="GitHub Logo" />
                </a>
            </div>
            <ul className="navbar-links">
                <li><a href="/">Pull requests</a></li>
                <li><a href="/">Issues</a></li>
                <li><a href="/">Marketplace</a></li>
                <li><a href="/">Explore</a></li>
                <li>
                    <button onClick={toggleDropdown} className="user-menu">
                        Usuario
                    </button>
                    {dropdownVisible && (
                        <ul className="dropdown">
                            <li><a href="/profile">Perfil</a></li>
                            <li><a href="/settings">Configuración</a></li>
                            <li><a href="/logout">Cerrar sesión</a></li>
                        </ul>
                    )}
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;