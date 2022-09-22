import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container">
                    <Link to='/' className="navbar-brand text-light" href="#">Register </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/home' className="nav-link active text-light" aria-current="page" href="#">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link to='/profile' className="nav-link active text-light" aria-current="page" href="#">Profile</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Nav