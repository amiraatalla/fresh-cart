import React from "react";
import logo from "../../images/cart-shopping-solid.svg";
import "../../index.css";
export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-main-light navbar-light">
                <div className="container-fluid">
                    {/* <img src={logo} alt="" className="logo-color" /> */}
                    <i className="fa-solid fa-cart-shopping color-logo"></i>

                    <a className="navbar-brand" to="/"> FreshCart</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" to="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" to="/">Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" to="/">Categories</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" to="/">Brands</a>
                            </li>
                        </ul>


                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mt-2">

                            <a type="button" className="btn me-3 position-relative">
                            Cart
                            <i className="fa-solid fa-cart-shopping"></i>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                                    10
                                    <span className="visually-hidden">unread messages</span>
                                </span>
                            </a>
                            <li className="nav-item">
                                <a className="nav-link" to="/">Logout</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" to="/">Login</a>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}