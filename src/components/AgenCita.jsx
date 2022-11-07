import React from 'react'
import Footer from './Footer/Footer'

const AgenCita = () => {
  return (
    <div>
        <section>
        <form className="row espacioform" action='POST'>
            <div className="col-md-12 separarCitas">
                <label for="inputAddress" className="form-label">Nombre Conmpleto </label>
                <input type="text" className="form-control" id="inputnombreCita" placeholder="Ingresa tu nombre" required/>
            </div>
            <div className="col-md-6 separarCitas" >
                <label for="inputEmail4" className="form-label">Correo </label>
                <input type="email" className="form-control" id="inputEmailCita" placeholder='example@example.com' required/>
            </div>
            <div className="col-md-6 separarCitas">
                <label for="inputPassword4" className="form-label">Telefono</label>
                <input type="tel" className="form-control" id="inputTelCita" required  maxLength="10"/>
            </div>
            <div className='col-md-3 separarCitas'>
            <label className="form-label">Tipo de Evento</label>
            <select className="form-select" aria-label="Default select example" id='tipoevento' required>
                <option selected>Seleccione su evento</option>
                <option value="boda">Boda</option>
                <option value="xv años">XV años</option>
                <option value="bautizos">Bautizos</option>
                <option value="presentacion">Presentaciones</option>
                <option value="infantil">Infantil</option>
                <option value="graduaciones">Graduaciones</option>
                <option value="conferencias">Conferencias</option>
            </select>
            </div>
            <div className='col-md-3 separarCitas'>
                <label className="form-label">Fecha</label>
                <input className='form-control' type="datetime-local" id="fechahoraCita" />
            </div>
            <div className='col-md-3 separarCitas'>
                <label className="form-label">Salon</label>
                <select className="form-select" aria-label="Default select example" id='salonCita' required>
                    <option selected>Seleccione el salon</option>
                    <option value="salon1">Salon 1</option>
                    <option value="salon2">Salon 2</option>
                </select>
            </div>
            <div className='col-md-3 separarCitas'>
                <label className='form-label'>Num de invitados</label>
                <input type="number" className='form-control' id='numInviCita' min="100" max="400" maxLength="3" />
            </div>
            <div className="col-12 espacioform">
                <button type="submit" className="btn btn-primary text-button">Agendar</button>
            </div>
    </form>
        </section>
        <Footer/>
    </div>
  )
}

export default AgenCita