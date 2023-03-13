import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="page-footer font-small unique-color-dark mt-5">

            <div style={{backgroundColor:'#6351ce'}}>
                <div className="container">
                    <div className="row py-4 d-flex justify-content-center align-items-center">
                        <div className="col-md-6 col-lg-5 text-center footer-text text-white">
                            Check out our <a href="https://github.com/spectre900/Audio-to-Sign-Language-using-3D-Avatars" className='footer-link'>Github repo</a> for more information!
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-fluid text-white pt-3' style={{backgroundColor:'rgba(33,37,41,1)'}}>
                <div className="container text-md-left mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase font-weight-bold">Sanvaad</h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width:'60px'}}/>
                            <p className='footer-text'>A comprehensive toolkit containing various features related to Indian Sign Language.</p>
                        </div>


                    </div>
                </div>

                <div className="footer-copyright text-center py-3">© 2023 Copyright</div>
            </div>
            </footer>
    )
}

export default Footer