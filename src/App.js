import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import './Home.css'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Registro from './Pages/Registro'
import Paquetes from './Pages/Paquetes'
import Intro from './Pages/Intro'
import Detalles from './Pages/Detalles'
import React,{useState,useEffect} from "react";
import GlobalState from './Context/GlobalState'



function App() {

  const [log, setLog] = useState(false)
  const [usuario, setUsuario] = useState('')

  return (
    <GlobalState>
    <div className="App" className='paquetes'>
      <BrowserRouter>
      <Home  usuario={usuario}/>
      <Route path='/Home' to component={Home} exact/>
      <Route path='/Login' to component={()=><Login usuario={setUsuario}/>} exact/>
      <Route path='/' to component={Intro} exact/>
      <Route path='/Registro' to component={Registro} exact/>
      <Route path='/Paquetes' to component={Paquetes} exact/>
      <Route path='/Paquetes/:id' to component={Detalles} exact/>
      </BrowserRouter>
    </div>
    </GlobalState>
  );
}

export default App;
