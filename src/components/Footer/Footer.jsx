import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
    <div>
        <footer className='text-black py-3 bg-white'>
            <div className='container'>
                <nav className='row'>
                    <Link to = '/index' className='col-12 col-md-3 d-flex aling-items-center justify-content-center'>
                    <img src = "/images/LogoV 6.png"
                                width = "100"
                                height = "100"
                                className = "d-inline-block align-top"
                                alt = "React Bootstrap logo" />
                    </Link>
                    <ul className='col-12 col-md-3 list-unstyled'>
                        <li className='py-2'>
                            <Link to = '/nosotros' className='text-reset'>Nosotros</Link>
                        </li>
                    </ul>
                    <ul className='col-12 col-md-3 list-unstyled'>
                        <li className='font-weight-bold mb-3 py-2'>
                            <Link to = '/contacto' className='text-reset'>Contacto</Link>
                        </li>
                        <li className='d-flex justify-content-between'>
                        <i className="bi bi-facebook"/>
                        <i className="bi bi-whatsapp"/>
                        <i className="bi bi-messenger"/>                      
                        <i className="bi bi-instagram"/>
                        <i className="bi bi-tiktok"/>
                        </li>
                        
                    </ul>
                    
                    <ul className='col-12 col-md-3 list-unstyled'>
                        <li className='py-2'>
                            <Link to = '/aviso' className='text-reset'>Aviso de privacidad</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    </div>
    )
}

export default Footer