import React, { useState } from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'

export const RecoverPassword = () => {
    const [email, setEmail] = useState("");
    const onChange = (e) =>{
        e.preventDefault();
        setEmail(e.target.value)
    }
  return (
    <>
    
    <Container className='mt-3'>
    <Card.Title>Recupera tu contraseña</Card.Title>
        <Card className='mb-5'>
            <Card.Body className='mt-3'>
                <Card.Title>Correo electronico</Card.Title>
            <Form.Control name="email" placeholder="Ingrese su correo electronico" onChange={onChange}></Form.Control>
            <Button variant='outline-info' className='mt-3'>Recuperar contraseña</Button>
            </Card.Body>
        </Card>
    </Container>
 </>
)
}