import React, { Component } from 'react'
import styles from "./Navbar.module.css"
export default class Navbar extends Component {
  render() {
    return (
        <div className='bg-dark fixed-top'>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark w-75 m-auto p-3">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><h3>START REACT</h3></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#"><h5 className={`${styles.onHover}`}>PORTFOLIO</h5></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#"><h5 className={`${styles.onHover}`}>ABOUT</h5></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#"><h5 className={`${styles.onHover}`}>CONTACT</h5></a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
      </div>
    )
  }
}
