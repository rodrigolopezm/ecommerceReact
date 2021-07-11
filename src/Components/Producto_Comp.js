import '../App.css';
import React,{useState} from "react";
import ButtonWithLoading from '../ButtonWithLoading'
import Card from 'react-bootstrap/Card'
import {Link} from 'react-router-dom'
import '../Home.css'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import firebase from '../Config/firebase'
import ContextBase from '../Context/ContextBase'

function Producto_Comp(props) {

  const {destino, description, foto, precio, plazas} = props.data
  const id = props.id
  const [stockBis, setStock] = useState(plazas)
  const verDetalle = props.verDetalle
  const [mensaje, setMensaje] = useState("")

  function comprar() {
    if(stockBis > 0){
      setStock(stockBis-1)
      setMensaje('Gracias por su compra! Disfrute su viaje')
    } else {
      setMensaje('Paquetes agotados')
    }
  }

  const handleDelete = (event) =>{
    event.preventDefault()
    firebase.db.doc('Prueba/'+id)
    .delete()
    .then(doc=>{
      alert('La publicacion fue borrada')
    })
    .catch(error=>{
      alert(error.code)
    })
  }

if(verDetalle){

  return(
    <ContextBase.Consumer>
      {
        context => 
          <div>
            <h3>{destino}</h3>
            <h5>{description}</h5>
            <img src={foto} alt='Foto Destino' width='200' height='200'/>
            <br /><br />
            <h5>${precio}</h5>
            <h5>Codigo de paquete: {id}</h5>
            <h5>Quedan {stockBis} paquetes!</h5>
            {mensaje} <br /><br />
            
              <Container>
              <Row>
              {
              context.log &&
              <>
              <div style={{width:'20%'}}><ButtonWithLoading text='Compra Rápida' styles={{width:'100%'}}  variant='success' type='' onClick={comprar}/></div>
              <div style={{width:'60%'}}></div>
              <div style={{width:'20%'}}><Link to='/Paquetes'><ButtonWithLoading onClick={handleDelete} variant='danger' text='Eliminar Publicación' styles={{width:'100%'}} type='' /></Link><br /></div>
              </>
              }
              {
              !context.log &&
              <div style={{width:'30%'}}><Link to='/Login'><ButtonWithLoading variant='info' text='Logueate para Comprar' styles={{width:'100%'}} type='' /></Link><br /></div>
              }
              </Row>
              </Container>
             
            
          </div>
      }
    
    </ContextBase.Consumer>
  )

} else {

  return(
    <div>
      <Card style={{width:'60%', margin:'auto', borderRadius:'20px'}}>
        <div style={{width:'80%', margin:'10% 10% 0% 10%'}}><Card.Img variant="top" src={foto} style={{margin:'auto', borderRadius:'10px'}} /></div>
        <Card.Body>
          <Card.Text style={{textAlign:'center', fontSize:'30px', fontWeight:'bold'}}>{destino}</Card.Text>
        </Card.Body>
        <Link to={'/Paquetes/'+id}><div style={{margin:'0% 10% 3% 10%', textAlign:'center'}}><ButtonWithLoading text='Ver Detalle' type='' variant='info' styles={{width: '100%', margin:'10px 0px 10px 0px'}}/></div></Link>
      </Card>
 
    </div>
  )

}

}

export default Producto_Comp;



