import React from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

const PaqOroS1 = () => {
  return (
    <div>
      <section>
      <h2>Paquete Oro</h2>
          <p className='descriPaque'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti iusto ipsa delectus nostrum, ullam tenetur necessitatibus natus fugiat veniam. Nam illo, ipsam nobis sequi iure laboriosam architecto ut suscipit harum Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, voluptates. Fugit praesentium tenetur saepe eos quaerat perferendis natus ea reprehenderit esse rerum qui at debitis ex magnam, nesciunt doloremque tempore.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem architecto facilis placeat ea eligendi odio dolore ipsa aliquid officiis? Aspernatur vitae incidunt nobis quo deserunt facere minus animi dolores est. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate vitae repellat autem quos ea fugiat unde iure officia tempora voluptate! Soluta magni iure rem, consequuntur natus voluptatem id eligendi quae.
          </p>
        <p>Minimo 100 Maximo 400 personas </p>
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
                            <li>Meseros</li>
                          </ul>
                    </div>
                </div>
                <div className="col-4">
                    <div className="p-3 border bg-light">
                      <h6>Cotiza con el numero de invitados</h6>
                      <div className="form-floating mb-3">
                        <input type="number" className="form-control" id="NumInvitados" min="100" max="400" maxLength="3"/>
                        <label>Numero de Invitados</label>
                      </div>
                      <div class="form-floating">
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

export default PaqOroS1