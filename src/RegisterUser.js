import { Container, Card, Form, Button } from "react-bootstrap";
import { useState } from "react";
export const RegisterUser = () => {

    const [data, setData] = useState({});

    const onChangeRegister = (e) =>{
        e.preventDefault();
        const nData = data;
        nData[e.target.name] = e.target.value;
        setData(nData);
        console.log(nData)
      }
      
  return (
    <>
    <Container>
    <Card className='mt-3'>
    <center>
    <Card.Header as="h5">¡Registrate aqui!</Card.Header>
    </center>
    </Card>
    <Container>
    <Card className='mb-5'>
            <Card.Body className='mt-3'>
                <Card.Title>Nombre/s</Card.Title>
            <Form.Control name="name" placeholder="Ingrese su nombre/s" onChange={onChangeRegister}></Form.Control>
            </Card.Body>
       
            <Card.Body className='mt-3'>
                <Card.Title>Apellidos</Card.Title>
            <Form.Control name="last_name" placeholder="Ingrese sus apellidos" onChange={onChangeRegister}></Form.Control>
            </Card.Body>

            <Card.Body className='mt-3'>
                <Card.Title>Matricula</Card.Title>
            <Form.Control name="key" placeholder="Ingrese su matricula" onChange={onChangeRegister}></Form.Control>
            </Card.Body>

            <Card.Body className='mt-3'>
                <Card.Title>Numero de telefono</Card.Title>
            <Form.Control name="phone_number" placeholder="Ingrese su numero de telefono" onChange={onChangeRegister}></Form.Control>
            </Card.Body>

            <Card.Body className='mt-3'>
                <Card.Title>Correo electronico</Card.Title>
            <Form.Control name="email" placeholder="Ingrese su correo electronico" onChange={onChangeRegister}></Form.Control>
            </Card.Body>

            <Card.Body className='mt-3'>
                <Card.Title>Contraseña</Card.Title>
            <Form.Control name="password" placeholder="Ingrese su contraseña" onChange={onChangeRegister}></Form.Control>
            </Card.Body>
        
            <Button type="submit" variant="warning" className='mt-3'>Registrarse</Button>
        </Card>
    </Container>
    </Container>
    </>
  )
}

