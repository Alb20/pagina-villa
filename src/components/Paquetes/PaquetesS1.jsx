import React from 'react'
import { Link } from 'react-router-dom'
const paquetesS1 = () => {
  return (
    <div>
            <div className='container text-center'>
                <div className="row imgsespS1 ">
                    <div className="col">
                      <h3>Paquete Basico</h3>
                      <ul className='imgsespS1'>
                        <li>Manteleria</li>
                        <li>Movibiliario(Sillas Tiffany, Mesas Imperiales)</li>
                        <li>D.J(Sonido, Luces Ritmicas)</li>
                        <li>Limpieza de Sanitarios</li>
                        <li>Servicio de Gas en Cocina</li>
                      </ul>
                      <div className="d-grid gap-2 col-6 mx-auto ">
                            <Link to='/PaqBasS1'>
                                <button className="btn btn-primary text-button BotPaqBasS1" type="button"  > Conocer mas </button>
                            </Link>
                      </div>
                    </div>
                  
                    <div className="col">
                      <h3>Paquete Oro</h3>
                      <ul className='imgsespS1'>
                        <li>Manteleria</li>
                        <li>Movibiliario(Sillas Tiffany, Mesas Imperiales)</li>
                        <li>D.J(Sonido, Luces Ritmicas)</li>
                        <li>Limpieza de Sanitarios</li>
                        <li>Servicio de Gas en Cocina</li>
                        <li>Meseros</li>
                      </ul>
                      <div className="d-grid gap-2 col-6 mx-auto ">
                            <Link to='/PaqOroS1'>
                                <button className="btn btn-primary text-button BotPaqOroS1" type="button"  >  Conocer mas </button>
                            </Link>
                      </div>
                    </div>
                    <div className="col">
                      <h3>Paquete Platino </h3>
                      <ul className='imgsespS1'>
                        <li>Manteleria</li>
                        <li>Movibiliario(Sillas Tiffany, Mesas Imperiales)</li>
                        <li>D.J(Sonido, Luces Ritmicas)</li>
                        <li>Limpieza de Sanitarios</li>
                        <li>Servicio de Gas en Cocina</li>
                        <li>Meseros</li>
                        <li>Banquete (Cuatro tiempos)</li>
                        <li>Batucada</li>
                      </ul>
                      <div className="d-grid gap-2 col-6 mx-auto">
                            <Link to='/PaqPlaS1'>
                                <button className="btn btn-primary text-button BotPaqPlaS1" type="button"  >  Conocer mas </button>
                            </Link>
                      </div>
                    </div>
                    <div className="col">
                      <h3>Paquete VIP</h3>
                      <ul className='imgsespS1'>
                        <li>Manteleria</li>
                        <li>Movibiliario(Sillas Tiffany, Mesas Imperiales)</li>
                        <li>D.J(Sonido, Luces Ritmicas)</li>
                        <li>Limpieza de Sanitarios</li>
                        <li>Servicio de Gas en Cocina</li>
                        <li>Meseros</li>
                        <li>Banquete (Cuatro tiempos)</li>
                        <li>Batucada</li>
                        <li>Decorador **</li>
                        <li>Pista Iluminada</li>
                      </ul>
                      <div className="d-grid gap-2 col-6 mx-auto BotPaqVipS1">
                            <Link to='/PaqVipS1'>
                                <button className="btn btn-primary text-button" type="button"  >  Conocer mas</button>
                            </Link>
                      </div>
                    </div>
                </div>
            </div>
        
        {/* <Footer/> */}
    </div>
    
  )
}

export default paquetesS1