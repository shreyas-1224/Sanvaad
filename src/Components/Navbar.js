import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo.png'

function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg fixed-top py-4" id="mainNav" style={{ backgroundColor: "rgba(12, 186, 235, 0.5186449579831933)", height: "80px" }}  >
            <div className="container px-4 px-lg-5">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '18px' }} />
                    <h1 style={{ fontSize: '30px' , color:"white" }}>संवाद</h1>
                </div>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive" style={{margin:"-70px"}}>
                    <ul className="navbar-nav ms-auto my-3 my-lg-0" style={{fontSize:"25px"}}>
                        <li className="nav-item"><Link to='/sanvaad/home' className="nav-link" style={{paddingLeft:"30px"}}>Home</Link></li>
                        <li className="nav-item"><Link to='/sanvaad/convert' className="nav-link" style={{paddingLeft:"30px"}}>Convert</Link></li>
                        <li className="nav-item"><Link to='/sanvaad/learn-sign' className="nav-link" style={{paddingLeft:"30px"}}>Learn Sign</Link></li>
                        <li className="nav-item"><Link to='/sanvaad/home' className="nav-link" style={{paddingLeft:"30px"}}>real-time recognition</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar