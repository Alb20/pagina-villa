import React from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'


// function calcularCostos (){
// let numInvi = document.getElementById('NumInvitados').nodeValue;
// if (numInvi >= 150){
//   document.getElementById('CostoAprox').innerHTML="$7,500.";

// }
// }
const PaqPlaS1 = () => {
  return (
    <div>
<section>
      <h2>Paquete Platino</h2>
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
                            <li>Banquete (Cuatro tiempos)</li>
                            <li>Batucada</li>
                          </ul>
                    </div>
                </div>
                {/* <form action="calcularCostos"> */}
                <div className="col-4">
                    <div className="p-3 border bg-light">
                      <h6>Cotiza con el numero de invitados</h6>
                      <div className="form-floating mb-3">
                        <input type="number" className="form-control" id="NumInvitados" min="100" max="400" maxLength="3"/>
                        <label>Numero de Invitados</label>
                      </div>
                      <div class="form-floating">
                        <input type="text" className="form-control" id="CostoAprox" readOnly/> 
                      </div>
                    </div>
                    
                </div>
                {/* <button onClick={calcularCostos()}>Calcular</button> */}
                {/* </form> */}
            </div>
        </div>
</section>
        <h2>Platillos de Banquete</h2>
        <p>**En cuatro tiempos lleva 4 platos (Entrada, Crema o Sopa, Pasta o Arroz, Ensalada, Guarnicion y Plato Fuerte )**</p>
        <div className="container separaPlatillos px-4 text-center">
                <div className="row gx-10">
                <div className="col">
                    <div className="p-3 border bg-light">                    
                    <ul>
                    <h5>Entradas</h5>
                      <div className='row'>
                        <div className='col-6'>
                            <li>Cuernitos</li>
                            <li>Hojaldras</li>
                            <li>Bollos</li>
                            
                        </div>
                        <div className='col-6'>
                        <li>Medias Noches</li>
                            <li>Teleritas</li>
                            <li>Bolovanes</li>
                            <li>Semitas</li>
                        </div>
                      <div className='row'>
                      <h5>Rellenos</h5>
                            <div className='col'>
                              
                                <li>Jamon</li>
                                <li>Quesos</li>
                                <li>Pastes</li>
                                <li>Mole con pollo</li>
                                
                            </div>
                            <div className='col'>
                                
                                <li>Ensalada rusa</li>
                                <li>Ensalada de Atún</li>
                                <li>Carnes frias</li>
                                <li>Etc</li>
                            </div>
                        </div>
                        </div>
                    </ul>
                    </div>
                </div>
                </div>
          </div>

          <div className="container separaPlatillos px-4 text-center">
                <div className="row gx-10">
                <div className="col">
                    <div className="p-3 border bg-light">
                    <ul>
                    <h5>Sopas</h5>
                      <div className='row'>
                        <div className='col-6'>
                            <li>Mixta</li>
                            <li>Azteca</li>
                            <li>Cebolla</li>
                            
                        </div>
                        <div className='col-6'>
                            <li>Verdura</li>
                            <li>Campesina</li>
                            <li>Pasta de Queso</li>
                        </div>
                        </div>
                    </ul>
                    <ul>
                        <div className='row'>
                                  <h5>Cremas</h5>
                                  <div className='col-6'>
                                      <li>Elote</li>
                                      <li>Nuez</li>
                                      <li>Queso</li>
                                      <li>Brócoli</li>
                                      <li>Espárragos</li>
                                  </div>
                                  <div className='col-6'>
                                      <li>Champiñones</li>
                                      <li>Poblana</li>
                                      <li>Chicharo</li>
                                      <li>Flor de Calabaza</li>
                                  </div>
                        </div>
                    </ul>
                    <ul>
                              <div className='row'>
                                  <h5>Consomé</h5>
                                  <div className='col-6'>
                                      <li>Res</li>
                                      <li>Pollo</li>
                                      <li>Tlalpeño</li>
                                  </div>
                                  <div className='col-6'>
                                      <li>Ejecutivo</li>
                                      <li>Camarón</li>
                                      <li>Caldo</li>
                                  </div>
                              </div>
                      </ul>
                    </div>
                </div>
                </div>
      </div>

      <div className="container gx-10 separaPlatillos px-4 text-center">
          <div className="row gx-10">
                <div className="col">
                    <div className="p-3 border bg-light">
                      <ul>
                        <h5>Pasta</h5>
                          <div className='row'>
                              <div className='col-6'>
                                  <li>Italiana</li>
                                  <li>Tres quesos</li>
                                  <li>Napolitana</li>
                                  
                              </div>
                              <div className='col-6'>
                                  <li>A la crema</li>
                                  <li>A la boloñesa</li>
                                  <li>A la mantequilla</li>
                              </div>
                          </div>
                      </ul>
                      <ul>
                            <div className='row'>
                              <h5>Arroz</h5>
                                      <div className='col-6'>
                                          <li>Blanco</li>
                                          <li>Canario</li>
                                          <li>Poblano</li>
                                      </div>
                                      <div className='col-6'>
                                          <li>Primavera</li>
                                          <li>A la jardinera</li>
                                          <li>A la mexicana</li>
                                      </div>
                            </div>
                      </ul>
                    </div>
                </div>
          </div>
      </div>


        <div className="container px-10 separaPlatillos text-center">
            <div className="row gx-10">
                <div className="col">
                    <div className="p-3 border bg-light">                   
                        <ul>
                        <h5>Ensalada y Guarnición</h5>
                          <div className='row'>
                          <div className='col-4'>
                                <li>Mixta</li>
                                <li>Waldo</li>
                                <li>Princesa</li>
                                <li>Hawaiana</li>
                                <li>Malvavisco</li>
                                <li>Noche Buena</li>
                                <li>Gelatina/Cahnty</li>
                                <li>Cuatro lechugas</li>
                          </div>
                          <div className='col-4'>
                                <li>Colecitas c/ Tocino</li>
                                <li>Pure de Papa</li>
                                <li>Papas al horno</li>
                                <li>Papas al gratín</li>
                                <li>Papas al perejil</li>
                                <li>Papas a la vinagreta</li>
                                <li>Papas a la mantequilla</li>
                                <li>Papas escalfadas</li>
                          </div>
                          <div className='col-4'>
                                <li>Papas a la francesa</li>
                                <li>Suffle de papa</li>
                                <li>Frijoles refritos</li>
                                <li>Ensalada rusa</li>
                                <li>Pure de manzana</li>
                                <li>Verduras al vapor</li>
                                <li>Verduras a la vinagreta</li>
                                <li>Verduras a la mantequilla</li>
                                <li>Nopales en escabeche</li>
                          </div>
                          </div>
                        </ul>
                    </div>
                </div>
            </div>
      </div>
      <div className="container px-10 separaPlatillos text-center">
                <div className="row gx-10">
                    <div className="col">
                        <div className="p-3 border bg-light">                                                   
                            <ul>
                            <h5>Plato fuerte</h5>
                              <div className='row'>
                                  <h5>Pollo</h5>
                                  <div className='col-6'>
                                        <li>En pipian</li>
                                        <li>En adobo</li>
                                        <li>En mole rojo</li>
                                        <li>Tipo Kentucky</li>
                                        <li>En mixiote</li>
                                  </div>
                                  <div className='col-6'>
                                        <li>Al achiote</li>
                                        <li>A la barbacoa</li>
                                        <li>Con champiñones</li>
                                        <li>A la crema</li>
                                        <li>Al manchamantel</li>
                                  </div>
                              </div>
                            </ul>
                            <ul>
                              <div className='row'>
                                  <h5>Pechuga</h5>
                                  <div className='col-4'>
                                        <li>A la piña</li>
                                        <li>A la florentina</li>
                                        <li>A la Campesina</li>
                                        <li>En salsa de mostaza</li>
                                  </div>
                                  <div className='col-4'>
                                        <li>Rellena de cordo blue</li>
                                        <li>Rellena en salsa de pimiento morrón</li>
                                        <li>En salsa de tamarindo</li>
                                        <li>Rellena de salsa rosa</li>
                                  </div>
                                  <div className='col-4'>
                                        <li>Rellena a la parmesana</li>
                                        <li>Rellena a la salsa de Gribi</li>
                                        <li>A la ciruela con crema</li>
                                        <li>S/r con champiñones</li>
                                  </div>
                              </div>
                            </ul>
                            <ul>
                              <div className='row'>
                                  <h5>Res</h5>
                                  <div className='col'>
                                        <li>Albondigon</li>
                                        <li>Cuete mechado</li>
                                        <li>Pastel de carne</li>
                                        <li>Roastbeef al horno</li>
                                  </div>
                              </div>
                            </ul>
                            <ul>
                              <div className='row'>
                                  <h5>Cerdo</h5>
                                  <div className='col-4'>
                                        <li>Pierna al horno</li>
                                        <li>Pierna en adobo</li>
                                        <li>Pierna en pasilla</li>
                                        <li>Pierna al Achiote</li>
                                  </div>
                                  <div className='col-4'>
                                        <li>Pierna c/ manzana y piña</li>
                                        <li>Pierna rellena en su jugo</li>
                                        <li>Lomo relleno</li>
                                        <li>Lomo a la coca</li>
                                        <li>Lomo tres chiles</li>
                                  </div>
                                  <div className='col-4'>
                                        <li>Lomo a la ciruela</li>
                                        <li>Lomo a la naranja</li>
                                        <li>Lomo a la jerez</li>
                                        <li>Lomo a la mostaza</li>
                                  </div>
                              </div>
                            </ul>
                            <ul>
                              <div className='row'>
                                  <h5>Filete</h5>
                                  <div className='col'>
                                        <li>Filete miñon</li>
                                        <li>Filete azteca</li>
                                        <li>Filete tampiqueña</li>
                                        <li>Filete de pollo</li>
                                        <li>Filete a la mostaza</li>
                                  </div>
                              </div>
                            </ul>
                        </div>
                    </div>
                </div>
      </div>
      <div className="container px-10 separaPlatillos text-center">
            <div className="row gx-10">
                <div className="col">
                    <div className="p-3 border bg-light">
                        <ul>
                        <h5>Platillos infantiles</h5>
                          <div className='row'>
                            <div className='col'>
                                  <li>Hamburguesas</li>
                                  <li>Banderillas</li>
                                  <li>Nuggets</li>
                                  <li>Hot Dogs</li>
                                  <li>Tiras de pollo empanizdo</li>
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col'>
                                  <p>**Todos los platillos se sirven con papas a la francesa y sopa fria**</p>
                            </div>
                          </div>
                        </ul>
                    </div>
                </div>
            </div>
      </div>
      <h2>Otros servicios</h2>
      <div className="container px-10 separaPlatillos text-center">
            <div className="row gx-10">
                <div className="col">
                    <div className="p-3 border bg-light">
                        <ul>
                        <h5>Parrilladas</h5>
                          <div className='row'>
                                <div className='col-6'>
                                      <li>Cecina</li>
                                      <li>Choriqueso</li>
                                      <li>Carne enchilada</li>
                                      <li>Fajitas de pechuga de pollo</li>
                                      <li>Tiras de pollo empanizdo</li>
                                </div>
                                <div className='col-6'>
                                      <li>Nopalitos</li>
                                      <li>Tortillas</li>
                                      <li>Dos tipos de salsa</li>
                                      <li>Frijoles de olla</li>
                                      <li>Cebollitas de Cambray</li>
                                </div>
                          </div>
                          <div className='row'>
                            <div className='col'>
                                  <p>**Personal Opcional**</p>
                            </div>                            
                          </div>
                        </ul>
                    </div>
                </div>
            </div>
      </div>
      <div className="container px-10 separaPlatillos text-center">
            <div className="row gx-10">
                <div className="col">
                    <div className="p-3 border bg-light">
                        <ul>
                          <div className='row'>   
                          <h5>Taquizas</h5>                            
                                <div className='col'>
                                      <li>Tortillas</li>
                                      <li>Frijoles refritos</li>
                                      <li>Dos tipos de salsa</li>
                                      <li>Arroz a la mexicana</li>
                                      <li>Cinco guisados a elegir</li>
                                </div>
                          </div>
                          <div className='row'>
                            <h5>Platillos a elegir</h5>
                            <div className='col-3'>
                                      <li>Picadillo</li>
                                      <li>Salpicón</li>
                                      <li>Croquetas</li>
                                      <li>Tinga de pollo</li>
                                      <li>Cochinita pibil</li>
                                      <li>Cerdo en pasilla</li>
                            </div>   
                            <div className='col-3'>
                                      <li>Rajas con crema</li>
                                      <li>Pollo con Mole verde</li>
                                      <li>Pollo con Mole rojo</li>
                                      <li>Carnes frias</li>
                                      <li>Carne Norteña</li>
                                      <li>Chorizo con papas</li>
                            </div> 
                            <div className='col-3'>
                                      <li>Nopales con huevo</li>
                                      <li>Chicharrón presando</li>
                                      <li>Costilla en salsa roja</li>
                                      <li>Chicharon en salsa verde</li>
                                      <li>Fajitas al guajillo</li>
                                      <li>Moronga a la mexicana</li>
                            </div>
                            <div className='col-3'>
                                      <li>Chicharon en salsa Roja</li>
                                      <li>Lengua en adobo </li>
                                      <li>Higado encebollado</li>
                                      <li>Cerdo con nopales ensalsa verde</li>
                                      <li>Chiles jalapeños rellenos</li>
                                      <li>Chilacas c/ huevo y papas</li>
                            </div>                                                      
                          </div>
                        </ul>
                    </div>
                </div>
            </div>
      </div>

      <div className="container separaPlatillos px-4 text-center">
                <div className="row gx-10">
                <div className="col">
                    <div className="p-3 border bg-light">
                      <h4>Cockteleria</h4>
                    <ul>
                    <h5>Cremosos</h5>
                      <div className='row'>
                        <div className='col-4'>
                            <li>Conejos</li>
                            <li>Chapulin</li>
                            <li>Alexander</li>
                            <li>Viernes 13</li>
                            
                        </div>
                        <div className='col-4'>
                            <li>Ruso Blanco</li>
                            <li>Ruso negro</li>
                            <li>Piña colada</li>
                            <li>Fresa colada</li>
                        </div>
                        <div className='col-4'>
                            <li>Mango colado</li>
                            <li>Beso de Ángel</li>
                            <li>Medias de Seda</li>
                            <li>Sperris de chocolate</li>
                        </div>
                        </div>
                    </ul>
                    <ul>
                        <div className='row'>
                                  <h5>Tropicales</h5>
                                  <div className='col-4'>
                                      <li>Bull</li>
                                      <li>Jirafa</li>
                                      <li>Sangria</li>                                     
                                  </div>
                                  <div className='col-4'>
                                      <li>Clericot</li>
                                      <li>Palomas</li>
                                      <li>Lagartija</li>
                                      <li>Piña colada</li>
                                  </div>
                                  <div className='col-4'>
                                      <li>Desarmador</li>
                                      <li>Perro salado</li>
                                      <li>Tequila Sunrise</li>                                     
                                  </div>
                        </div>
                    </ul>
                    <ul>
                              <div className='row'>
                                  <h5>Cockteleria sin alcohol</h5>
                                  <div className='col-6'>
                                      <li>Conga</li>
                                      <li>Chilindrina</li>
                                      <li>Pantera Rosa</li>
                                  </div>
                                  <div className='col-6'>
                                      <li>Canica</li>
                                      <li>Piñada</li>
                                      <li>Gusano </li>
                                  </div>
                              </div>
                      </ul>
                    </div>
                </div>
                </div>
      </div>
        <div className="d-grid gap-2 col-6 mx-auto">
              <Link to='/AgenCita'>
                <button className="btn btn-primary text-button BotPaqPlaS1" type="button"  >Agendar Cita</button>
              </Link>
        </div>
    
      <Footer/>
    </div>
  )
}

export default PaqPlaS1