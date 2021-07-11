import './App.css';
import {Link} from 'react-router-dom'
import React, {useState} from 'react'
import {Navbar, Nav} from 'react-bootstrap'

function OptionsNavbar(props) {

  return(
    <div>
      <Nav.Link as={Link} to={props.path} onClick={props.onClick} style={props.style}>{props.label}</Nav.Link>
    </div>
  )
  
}

export default OptionsNavbar;
