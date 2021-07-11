import '../App.css';
import {Link} from 'react-router-dom'
import React,{useState,useEffect} from "react";
import Producto_Comp from '../Components/Producto_Comp'
import firebase from '../Config/firebase'
import ButtonWithLoading from '../ButtonWithLoading'
import {Container} from 'react-bootstrap/'


function Detalles(props) {
  
  const [paquetes, setPaquetes] = useState([])
  const [loading, setLoading] = useState(true)
  const id = props.match.params.id
  
  useEffect(
    () => {
      firebase.db.doc('Prueba/'+id)
      .get()
      .then(doc=>{
        setPaquetes(doc)
        setLoading(false)
      })
    }, []
  )

  if(loading){
    return(
      <div>
        Loading...
        <Link to='/'>Volver</Link><br />
      </div>
    )
  } else {
  
  return(

    <div style={{width:'80%', marginLeft:'10%', marginTop:'5%', background:'darkgrey', borderRadius:'10px', border:'1px solid black'}}>
    <Container>
    
        <br />
        <Producto_Comp data={paquetes.data()} verDetalle={true} id={paquetes.id}/><br />
        <Link to='/Paquetes'><ButtonWithLoading text='Volver' type='' variant='dark' /></Link><br />
        <br />
    </Container>
    </div>
    
  )
  }
}

export default Detalles;

