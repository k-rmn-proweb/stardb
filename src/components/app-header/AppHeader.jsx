import React from "react";

const AppHeader = () => {
    return(
        <div className="row align-items-center mt-4">
            <h2 className="app-logo">StarDB</h2>
            <nav className="ml-5">
                <ul className="nav nav-fill">
                    <li className="nav-item"><a className="nav-link active" href="!#">Planets</a></li>
                    <li className="nav-item"><a className="nav-link" href="!#">Peoples</a></li>
                    <li className="nav-item"><a className="nav-link" href="!#">StarShips</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default AppHeader;