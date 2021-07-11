import './App.css';
import React, {useState} from 'react'
import {Button, Container, Spinner} from 'react-bootstrap/'
import Form from 'react-bootstrap/Form'

function FormBasics(props) {

const {text, type, name, value, onChange, placeholder} = props

  return(
    <Container>
          <Form.Group>
            <Form.Label for ={name}>{text || ''}</Form.Label>
            <Form.Control type={type} placeholder={placeholder || ''} onChange={onChange} value={value} for={name} name={name} />
          </Form.Group>
    </Container>
  )
  
}

export default FormBasics;
