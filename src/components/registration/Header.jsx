import React from "react";
import "./styles/header.css"

function HeaderRegister() {

    return(
            <header className="header">
                <h1 className="title">Healthy Food</h1>
                <nav className="nav-menu">
                    <ul className="list-menu">
                        <li className='list-iten'>
                            <a className='menu-link' href="#">HOME</a>
                        </li>
                    </ul>
                </nav>
            </header>
    )
}

export default HeaderRegister