import React,{useState} from 'react'
import ContextBase from './ContextBase'

function GlobalState(props){
    const[log, setLog] = useState(localStorage.getItem('login'))
    const [usuario, setUsuario] = useState(localStorage.getItem('usuario'))

    const loginUser = () =>{
        setLog(true)
        localStorage.setItem('login', true)
        
    }

    const logOutUser = () =>{
        setLog(false)
        localStorage.removeItem('login')
        localStorage.removeItem('usuario')
    }

    const nombreUsuario = (nombre) =>{
        setUsuario(nombre)
        localStorage.setItem('usuario', nombre)
    }

    return(
        <ContextBase.Provider 
            value={{
                log: log,
                loginUser: loginUser,
                logOutUser: logOutUser,
                usuario: usuario,
                nombreUsuario: nombreUsuario
            }}
        >
            {props.children}
        </ContextBase.Provider>
    )
}

export default GlobalState;