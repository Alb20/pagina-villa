import React from "react";
import Footer from "./Footer/Footer";
import { Link } from "react-router-dom";
const citas = () => {
    return (
        <div>
            <section>
            <div className="container">
                    <div className="row">
                        <div className=" col   col- lg-4  col- xxl-4 espacioform">
                            <h2>Agendar</h2>
                            <p>Desea agendar una cita</p>
                            <p>Haga Click en el siguiente boton </p>
                            <Link to='/AgenCita'>
                            <button className='btn btn-primary text-button espacioform'  > Agendar </button>
                            </Link>
                        </div>
                        <div className=" col   col- lg-4  col- xxl-4 espacioform">
                            <h2>Reagendar</h2>
                            <p>Ingrese el folio</p>
                            <p>**Esta ubicado en tu archivo de cita** </p>
                            <form className="row espacioform">
                                    <div>
                                        <input type="number" className="form-control" id="idregistro" placeholder="Coloca tu folio " required/>
                                    </div>
                            </form>
                            <Link to=''>
                            <button className='btn btn-primary text-button espacioform'  > Reagendar </button>
                            </Link>
                        </div>
                        <div className=" col   col- lg-4  col- xxl-4 espacioform" >
                        <h2>Cancelar</h2>
                            <p>Ingrese el folio</p>
                            <p>**Esta ubicado en tu archivo de cita** </p>
                            <form className="row espacioform">
                                    <div>
                                        <input type="number" className="form-control" id="idregistro" placeholder="Coloca tu folio " required/>
                                    </div>
                            </form>
                            <Link to=''>
                            <button className='btn btn-primary text-button espacioform'  > Cancelar </button>
                            </Link>
                        </div>
                    </div>
                </div>
                </section>
            <Footer/>
        </div>
    )
}
export default citas