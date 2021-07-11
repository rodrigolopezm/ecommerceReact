import '../App.css';
import '../Home.css'
import {Link} from 'react-router-dom'
import firebase from "../Config/firebase"
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import ButtonWithLoading from '../ButtonWithLoading'
import Row from 'react-bootstrap/Row'

function Intro() {

  return(
    <div style={{height:'1000px', background:'silver'}}>
    <Jumbotron fluid>
      <Container style={{background:'darkgrey', borderRadius:'10px'}}>
      <br />
       <h1 className='font' style={{textAlign:'center', fontSize:'50px'}}>Bienvenido a Turisteando!</h1>
       <br />
       <h5 style={{textAlign:'justify'}}>Los paquetes turísticos a Argentina que estás buscando para tus vacaciones te esperan en Turisteando. Descubrí las mejores promociones para conocer este país con excelentes descuentos y recorre sus ciudades y atractivos imperdibles. Con los paquetes de viaje a Argentina vas a subir al avión con todo listo para disfrutar tu viaje. Hacé tu reserva ya mismo, aprovechá nuestras ofertas y creá recuerdos que vas a guardar toda la vida. Los paquetes de viaje a Argentina simples incluyen el vuelo + hotel, y cubren tus necesidades básicas. Lo mejor de armar tus vacaciones dentro de un paquete a Argentina es que si comprás todo junto tenés excelentes descuentos.</h5>
      <br />
      <h5 style={{textAlign:'justify'}}>Aprovechá ya mismo las promociones que tenemos para tus vacaciones. Reservá ahora tus paquetes turísticos a Argentina y disfrutá un viaje inolvidable.</h5>
      <br />
      <Row>
      <div style={{width:'30%'}}></div>
      <div style={{width:'40%'}}><Link to='/Paquetes' ><ButtonWithLoading variant="info" styles={{width:'100%'}} text='Conocé nuestros paquetes!' type=''/></Link></div>
      <div style={{width:'30%'}}></div>
      </Row>
      <br />
      </Container>
    </Jumbotron>
    </div>

  )
}

export default Intro;


