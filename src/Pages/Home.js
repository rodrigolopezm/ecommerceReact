import '../App.css';
import '../Home.css'
import {Nav} from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import OptionsNavbar from '../OptionsNavbar'
import React,{useState,useEffect} from "react";
import Row from 'react-bootstrap/Row'
import ContextBase from '../Context/ContextBase'

function Home(props) {

  const logOut = (event) => {
    props.setLog(false) 
   }

  return(
    
    <ContextBase.Consumer>
      {
          context =>
                <div>

                <Navbar bg="dark" variant="dark">        
              
                {
                  context.log &&
                  <>
                  <Row style={{width:'110%'}}>
                  <Nav className="mr-auto"style={{width:'100%'}}>
                  
                  <div style={{width:'50px'}}><img src={'https://cdn0.iconfinder.com/data/icons/citycons/150/Citycons_plane-512.png'} width='50px' height='50px'></img></div>
                  <div style={{width:'113px'}}><div className='barra'><Navbar.Brand>Turisteando</Navbar.Brand></div></div>
                  <div style={{width:'58px'}}><OptionsNavbar path='/' label='Home' style={{paddingTop: '13px'}}/></div>
                  <div style={{width:'82px'}}><OptionsNavbar path='/Paquetes' label='Paquetes' style={{paddingTop: '13px'}}/></div>
                  <div style={{width:'45%'}}></div>
                  <div style={{width:'300px', color:'darkgrey', textAlign:'center',paddingTop: '13px'}}>Hola {context.usuario}!</div>
                  <div style={{width:'74px', addingRight:'0px'}}><OptionsNavbar path='/' label='Log Out' onClick={() => context.logOutUser()} style={{paddingTop: '13px'}}/></div>
                
                  </Nav>
                  </Row>
                  </>
                }
                {
                  !context.log &&
                  <>
                  <Row style={{width:'110%'}}>
                  <Nav className="mr-auto" style={{width:'100%'}}>
                  <div style={{width:'50px'}}><img src={'https://cdn0.iconfinder.com/data/icons/citycons/150/Citycons_plane-512.png'} width='50px' height='50px'></img></div>
                  <div style={{width:'113px'}}><div className='barra'><Navbar.Brand>Turisteando</Navbar.Brand></div></div>
                  <div style={{width:'58px'}}><OptionsNavbar path='/' label='Home' style={{paddingTop: '13px'}}/></div>
                  <div style={{width:'82px'}}><OptionsNavbar path='/Paquetes' label='Paquetes' style={{paddingTop: '13px'}}/></div>
                  <div style={{width:'64%'}}></div>
                  <div style={{width:'115px', paddingRight:'0px'}}><OptionsNavbar path='/Login' label='Iniciar Sesion' style={{paddingTop: '13px', float:'left'}}/></div>
                  </Nav>
                  </Row>
                  </>
                }
                
              
            </Navbar>

          </div>
  } 
    </ContextBase.Consumer>
  )
}

export default Home;


