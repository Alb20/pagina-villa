import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Navbar from './layouts/Navbar';
import Index from './components/Index';
import Salon1 from './components/Salon1';
import Salon2 from './components/Salon2';
import Contacto from './components/Contacto';
import Citas from './components/Citas';
import PaquetesS2 from './components/Paquetes/PaquetesS2';
import PaquetesS1 from './components/Paquetes//PaquetesS1';
import PaqBasS1 from './components/Paquetes/PaqBasS1'
import PaqOroS1 from './components/Paquetes/PaqOroS1'
import PaqPlaS1 from './components/Paquetes/PaqPlaS1'
import PaqVipS1 from './components/Paquetes/PaqVipS1'
import PaqBasS2 from './components/Paquetes/PaqBasS2';
import PaqOroS2 from './components/Paquetes/PaqOroS2'
import PaqPlaS2 from './components/Paquetes/PaqPlaS2'
import PaqVipS2 from './components/Paquetes/PaqVipS2'
import AgenCita from './components/AgenCita';
function App() {
    return (

        <div class = "App" >
            <BrowserRouter>
                <Routes>
                    <Route path = '/' element = { < Navbar / > } >
                        <Route path = 'index' element = { < Index / > }/>   
                        <Route path = 'salon1' element = { < Salon1 / > }/>   
                        <Route path = 'salon2' element = { < Salon2 / > }/>    
                        <Route path = 'contacto' element = { < Contacto / >}/> 
                        <Route path = 'citas' element = { < Citas / >}/>     
                        <Route path='paquetesS1' element = {<PaquetesS1/>}></Route> 
                        <Route path='paquetesS2' element = {<PaquetesS2/>}></Route>
                        <Route path='PaqBasS1' element = {<PaqBasS1/>}></Route>
                        <Route path='PaqOroS1' element = {<PaqOroS1/>}></Route>
                        <Route path='PaqPlaS1' element = {<PaqPlaS1/>}></Route>
                        <Route path='PaqVipS1' element = {<PaqVipS1/>}></Route>
                        <Route path='PaqBasS2' element = {<PaqBasS2/>}></Route>
                        <Route path='PaqOroS2' element = {<PaqOroS2/>}></Route>
                        <Route path='PaqPlaS2' element = {<PaqPlaS2/>}></Route>
                        <Route path='PaqVipS2' element = {<PaqVipS2/>}></Route>
                        <Route path='AgenCita' element = {<AgenCita/>}></Route>
                    </Route> 
                    
                </Routes> 
            </BrowserRouter>  
        </div>
    );
}

export default App;