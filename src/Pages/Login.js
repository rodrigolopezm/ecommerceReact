import '../App.css';
import {Link} from 'react-router-dom'
import React, {useState, useContext} from 'react'
import firebase from "../Config/firebase"
import {Container} from 'react-bootstrap/'
import {useHistory} from 'react-router-dom'
import ButtonWithLoading from '../ButtonWithLoading'
import FormBasics from '../FormBasics'
import Row from 'react-bootstrap/Row'
import ContextBase from '../Context/ContextBase'

function Login(props) {

  const history = useHistory()
  const context = useContext(ContextBase)
  const [form, setForm] = useState({mail:'', password:''})
  const [loading, setLoading] = useState(false)

  const handleSubmit = (event) => {
    console.log(form)
    event.preventDefault()
    setLoading(true)
    firebase.auth.signInWithEmailAndPassword(form.mail, form.password)
    .then(data => {
      setLoading(false)
      alert('Bienvenido')
      history.push('/')
      context.loginUser()
      context.nombreUsuario(form.mail)
    })
    .catch(error => {
      setLoading(false)
      alert(error.message)
    })
  }

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setForm({...form,[name]:value})
  }

  return(
    <div style={{width:'100%', height:'1000px'}}>
    <br />
    <Container style={{width:'50%', border:'solid 1px black', borderRadius:'10px', background:'darkgrey'}}>
    <div>
      <br />
      <h3 style={{textAlign:'center',fontWeight:'bold'}}>Inicio de Sesión</h3>
      <br />
          <form onSubmit={handleSubmit} style={{fontWeight:'bold'}}>
          <FormBasics name='mail' text='Mail: ' type='email' value={form.mail} onChange={handleChange}/><br />
          <FormBasics name='password' text='Contrasena: ' type='password' value={form.password} onChange={handleChange}/><br />
          <Row style={{width:'95%', margin:'0% 2.5% 0% 2.5%'}}>
            <div style={{width:'20%'}}><ButtonWithLoading text='Ingresar' variant='info' styles={{width:'100%'}} loading={loading}/></div>
            <div style={{width:'50%'}}></div>
            <div style={{width:'30%'}}><Link to='/' ><ButtonWithLoading variant="dark" styles={{width:'100%'}} text='Volver al Inicio' type=''/></Link></div>
          </Row>
          <br /> 
          <Link to='/Registro' style={{marginLeft:'15px'}}>No tenes usuario? Registrate!</Link>
          </form>
          <br />
         
    </div>
    </Container>
    </div>
  )
  
}

export default Login;

