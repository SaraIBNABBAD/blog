import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import "boxicons";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "../../css/welcome.css";

export default function Welcome(props) {
    return (
        <>
            <header>
                <Head title="Welcome" />

                <nav className="navbar navbar-expand-lg navbar-dark py-2">
                    <div className="container-fluid ">
                        <Link className="navbar-brand" href="#">
                            <h2>Blog</h2>
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarNavDropdown"
                        >
                            <ul className="navbar-nav m-3">
                                <li className="nav-item">
                                    <Link
                                        className="nav-link active"
                                        aria-current="page"
                                        href="#"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" href="#">
                                        Login
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" href="#">
                                        Register
                                    </Link>
                                </li>
                                {/*<li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </Link>
           <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="#">Action</Link></li>
            <li><Link className="dropdown-item" href="#">Another action</Link></li>
            <li><Link className="dropdown-item" href="#">Something else here</Link></li>
          </ul> 
        </li>*/}
                            </ul>
                        </div>
                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button
                                className="btn btn-outline-primary"
                                type="submit"
                            >
                                Search
                            </button>
                        </form>
                        <div className="icon d-flex g-1">
                            <box-icon
                                type="logo"
                                name="facebook"
                                color="white"
                                margin="5px"
                            ></box-icon>
                            <box-icon
                                type="logo"
                                name="instagram"
                                color="white"
                                margin="5px"
                            ></box-icon>
                            <box-icon
                                type="logo"
                                name="twitter"
                                color="white"
                                margin="5px"
                            ></box-icon>
                            <box-icon
                                type="logo"
                                name="linkedin"
                                color="white"
                                margin="5px"
                            ></box-icon>
                        </div>
                    </div>
                </nav>
                <div className="w-50 m-auto mt-5 p-5">
                    <h1 className="m-auto text-center text-white">
                        Lorem ipsum dolor sit
                    </h1>
                    <h3 className="m-auto text-center text-white">
                        Lorem ipsum dolor sit amet
                    </h3>
                    <p className="m-auto text-center">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Numquam ducimus voluptas quo suscipit placeat
                        doloremque, quas laboriosam velit iusto explicabo!
                        Quibusdam est molestias nesciunt sit animi tempora
                        libero nemo aliquam.
                    </p>
                </div>
            </header>
        </>
    );
}
