import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Navbar from './layouts/Navbar';
import Index from './components/Index';
import Salon1 from './components/Salon1';
import Salon2 from './components/Salon2';
import Contacto from './components/Contacto';
import Citas from './components/Citas';
import PaquetesS1 from './components/PaquetesS1';
import PaquetesS2 from './components/PaquetesS2';

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
                    </Route>
                    <Route path='paquetesS1' element = {<PaquetesS1/>}></Route> 
                    <Route path='paquetesS2' element = {<PaquetesS2/>}></Route> 
                </Routes> 
            </BrowserRouter>  
        </div>
    );
}

export default App;