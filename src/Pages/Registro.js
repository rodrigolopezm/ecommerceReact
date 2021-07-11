import '../App.css';
import {Link} from 'react-router-dom'
import React, {useState} from 'react'
import firebase from '../Config/firebase'
import {Button, Container, Spinner} from 'react-bootstrap/'
import ButtonWithLoading from '../ButtonWithLoading'
import FormBasics from '../FormBasics'
import Row from 'react-bootstrap/Row'

function Registro() {

  const handleSubmit = (event) => {
    event.preventDefault()
    setLoading(true)
    firebase.auth.createUserWithEmailAndPassword(form.mail, form.password)
    .then(data => {
      console.log('registro', data)
      alert('El usuario ha sido creado con exito, bienvenido ' + form.nombre + ' ' + form.apellido)
      firebase.db.collection("Users").add({
        nombre: form.nombre,
        apellido: form.apellido,
        mail: form.mail,
        telefono: form.telefono,
        userId: data.user.uid,
      })
      .then(data=>{
        console.log(data)
        setLoading(false)
      })
    })
    .catch(error => {
      setLoading(false)
      alert(error.message)
    })
  }
  

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    console.log(value)
    setForm({...form,[name]:value})
  }

  const [form, setForm] = useState({nombre:'', apellido:'', password:'', mail:'', telefono:''})
  const [loading, setLoading] = useState(false)

  return(
    <div style={{width:'100%', height:'1000px'}}>
    <br />
    <Container style={{width:'50%', border:'solid 1px black', borderRadius:'10px', background:'darkgrey'}}>
    <div>
      <br />
      <h3 style={{textAlign:'center', fontWeight:'bold'}}> Completa tus datos personales</h3>
      <br />
          <form onSubmit={handleSubmit} style={{fontWeight:'bold'}}>
          <FormBasics name='nombre' text='Nombre: ' type='text' value={form.nombre} onChange={handleChange}/>
          <FormBasics name='apellido' text='Apellido: ' type='text' value={form.apellido} onChange={handleChange}/>
          <FormBasics name='password' text='Contraseña: ' type='password' value={form.password} onChange={handleChange}/>
          <FormBasics name='mail' text='Mail: ' type='email' value={form.mail} onChange={handleChange}/>
          <FormBasics name='telefono' text='Telefono: ' type='number' value={form.telefono} onChange={handleChange}/>
          <br />
          <Row style={{width:'95%', margin:'0% 2.5% 0% 2.5%'}}>
          <div style={{width:'20%'}}><ButtonWithLoading text='Enviar' variant='info' styles={{width:'100%'}} /></div>
          <div style={{width:'50%'}}></div>
          <div style={{width:'30%'}}><Link to='/'><ButtonWithLoading type='' styles={{width:'100%'}} variant='dark' text='Volver al Inicio'/></Link></div>
          </Row>
          <br />
          </form>
          <br />
          
    </div>
    </Container>
    </div>
  )
}

export default Registro;
