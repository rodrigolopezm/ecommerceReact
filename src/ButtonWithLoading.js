import './App.css';
import {Link} from 'react-router-dom'
import React, {useState} from 'react'
import {Button, Container, Spinner} from 'react-bootstrap/'
import './Home.css'

function ButtonWithLoading(props) {

const {variant, type, loading, text, onClick, styles} = props

  return(

    <div >
          <Button variant={variant || "outline-primary"} type={type || 'submit'} disabled={loading} onClick={onClick} style={styles}>
            {
              loading &&
              <Spinner animation="grow" size='sm' />
            }
            {text}
          </Button>
    </div>

  )
  
}

export default ButtonWithLoading;
