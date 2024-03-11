import React from "react";

import './NavbarWrapper.css';
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";




const NavbarWrapper = () => {
    return (
        <div className="navbar-wrapper">
            <div className="navbar-desk">
                <Navbar />
            </div>
            <div className="navbar-mobile">
                <NavbarMobile />

            </div>
        </div>
    )
}

export default NavbarWrapper;