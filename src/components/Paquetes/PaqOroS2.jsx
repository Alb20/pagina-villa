import React from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
const PaqOroS2 = () => {
  return (
    <div>
       <section>
      <h2>Paquete Oro</h2>
          <p className='descriPaque'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti iusto ipsa delectus nostrum, ullam tenetur necessitatibus natus fugiat veniam. Nam illo, ipsam nobis sequi iure laboriosam architecto ut suscipit harum Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, voluptates. Fugit praesentium tenetur saepe eos quaerat perferendis natus ea reprehenderit esse rerum qui at debitis ex magnam, nesciunt doloremque tempore.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem architecto facilis placeat ea eligendi odio dolore ipsa aliquid officiis? Aspernatur vitae incidunt nobis quo deserunt facere minus animi dolores est. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate vitae repellat autem quos ea fugiat unde iure officia tempora voluptate! Soluta magni iure rem, consequuntur natus voluptatem id eligendi quae.
          </p>
        <p>Minimo 50 Maximo 200 personas </p>
        <div className="container px-4 text-center">
                <div className="row gx-5">
                <div className="col-8">
                    <div className="p-3 border bg-light">
                    <ul>
                            <li>Manteleria</li>
                            <li>Movibiliario(Sillas Tiffany, Mesas Imperiales)</li>
                            <li>D.J(Sonido, Luces Ritmicas)</li>
                            <li>limpieza de Sanitarios</li>
                            <li>Servicio de Gas en Cocina</li>
                            <li>Área de juegos </li>
                            <li>Meseros</li>
                          </ul>
                    </div>
                </div>
                <div className="col-4">
                    <div className="p-3 border bg-light">
                      <h6>Cotiza con el numero de invitados</h6>
                      <div className='col p-1'>
                          <label className="form-label">Tipo de Evento</label>
                          <select className="form-select" aria-label="Default select example" id='NumInvitados' required>
                              <option selected>Seleccione la cantidad de Invitados </option>
                              <option value="150">100-150</option>
                              <option value="200">150-200</option>
                              <option value="250">200-250</option>
                              <option value="300">250-300</option>
                              <option value="350">300-350</option>
                              <option value="400">350-400</option>                           
                          </select>
                      </div>
                      <div className="form-floating p-1">
                        <input type="text" className="form-control" id="CostoAprox" readOnly /> 
                      </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="d-grid gap-2 col-6 mx-auto">
              <Link to='/AgenCita'>
                <button className="btn btn-primary text-button BotPaqPlaS1" type="button"  >Agendar Cita</button>
              </Link>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default PaqOroS2