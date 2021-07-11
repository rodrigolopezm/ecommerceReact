import '../App.css';
import {Link} from 'react-router-dom'
import React,{useState,useEffect} from "react";
import Producto_Comp from '../Components/Producto_Comp'
import firebase from '../Config/firebase'
import FormBasics from '../FormBasics'
import ButtonWithLoading from '../ButtonWithLoading'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import '../Home.css'


function Paquetes() {

  const [paquetes, setPaquetes] = useState([])
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState({destino:'', precio:'', description:'', plazas:'', foto:''})
  const [cantidad, setCantidad] = useState(0)

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setForm({...form, [name]: value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setLoading(true)
    firebase.db.collection('Prueba').add({
    destino: form.destino,
    precio: form.precio,
    description: form.description,
    plazas: form.plazas,
    foto: form.foto
    })
    .then(data=>{
      alert("El destino ha sido agregado exitosamente")
      setLoading(false)

     
    })
    .catch(error=>{
      console.log(error)
    })
    
  }

  useEffect(
    () => {
      firebase.db.collection('Prueba')
      .get()
      .then(querySnapshot=>{
        setPaquetes(querySnapshot.docs)
        setLoading(false)
        setCantidad(querySnapshot.docs.length-1)
        console.log(cantidad)
      })
      .catch(error=>{
        console.log(error)
      })
    
    }, []
  )

  useEffect(
    () => {
      firebase.db.collection('Prueba')
      .get()
      .then(querySnapshot=>{
        setPaquetes(querySnapshot.docs)
        setLoading(false)
        setCantidad(querySnapshot.docs.length-1)
        
      })
    
    })

  if(loading){
    return(
      <div style={{width:'100%', height:'1000px', fontSize:'60px'}}>
      <Container>
        <br />
        Cargando la información...
        <br />
        <Link to='/' style={{marginTop: '20px'}}><ButtonWithLoading text='Volver' type=''/></Link><br />
      </Container>
      </div>
    )
  } else {

    return(
      <div className='paquetes font'>
        <br /><h2 style={{textAlign: 'center', fontWeight:'bold'}}>NUESTROS DESTINOS</h2><br />
        
        {paquetes.map(producto => <div className='col-12'>
        <Producto_Comp data={producto.data()} verDetalle={false} id={producto.id} />< br/>
        </div>
        )}
        
        <div style={{width:'59%', marginLeft:'20.5%', background:'darkgrey', borderRadius:'10px', border:'1px solid black'}}>
        <form onSubmit={handleSubmit} >
          <br />
          <Container style={{textAlign: 'center', fontSize: '20px', fontWeight:'bold'}}>AGREGUE SU OFERTA</Container>
          <FormBasics name='destino' text='Destino: ' type='text' value={form.destino} onChange={handleChange} placeholder='Ingrese el destino'/>
          <FormBasics name='description' text='Descripcion: ' type='text' value={form.description} onChange={handleChange} placeholder='Ingrese la descripcion'/>
          <FormBasics name='precio' text='Precio:' type='number' value={form.precio} onChange={handleChange} placeholder='Ingrese el precio'/>
          <FormBasics name='plazas' text='Plazas: ' type='number' value={form.plazas} onChange={handleChange} placeholder='Ingrese los lugares disponibles'/>
          <FormBasics name='foto' text='Link de Foto: ' type='text' value={form.foto} onChange={handleChange} placeholder='Ingrese el link de la foto'/>
          <br />
          <Container >
          <Row style={{margin:'0% 5% 0% 0%', width:'100%'}}>
          <div style={{width:'12%'}}><ButtonWithLoading text='Enviar' variant='info' styles={{width:'100%'}} loading={loading}/></div>
          <div style={{width:'76%'}}></div>
          <div style={{width:'12%'}}><Link to='/'><ButtonWithLoading variant='dark' styles={{width:'100%'}} text='Volver' type=''/></Link></div>
          </Row>
          <br />
          </Container>
          
        </form>
        </div>
        <br />
      </div>
    )
  }
  
}

export default Paquetes;



