import { Container, Card, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { validarUsuario, conteoErrores } from "./Validaciones";

export const RegisterUser = () => {
  const [datos, setData] = useState({});
  
  const onChangeRegister = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(datos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errores = validarUsuario(datos);
    
    if (!conteoErrores(errores)) {
      
      alert("Por favor, revisa los campos: " + Object.values(errores).join("\n"));
      return;
    }

    
    console.log("Formulario válido, enviando datos:", datos);
  };

  return (
    <>
      <Container>
        <Card className="mt-3">
          <center>
            <Card.Header as="h5">¡Registrate aquí!</Card.Header>
          </center>
        </Card>
        <Container>
          <Card className="mb-5">
            <Card.Body className="mt-3">
              <Card.Title>Nombre/s</Card.Title>
              <Form.Control
                name="name"
                placeholder="Ingrese su nombre/s"
                onChange={onChangeRegister}
              ></Form.Control>
            </Card.Body>

            <Card.Body className="mt-3">
              <Card.Title>Apellidos</Card.Title>
              <Form.Control
                name="last_name"
                placeholder="Ingrese sus apellidos"
                onChange={onChangeRegister}
              ></Form.Control>
            </Card.Body>

            <Card.Body className="mt-3">
              <Card.Title>Matrícula</Card.Title>
              <Form.Control
                name="key"
                placeholder="Ingrese su matrícula"
                onChange={onChangeRegister}
              ></Form.Control>
            </Card.Body>

            <Card.Body className="mt-3">
              <Card.Title>Número de teléfono</Card.Title>
              <Form.Control
                name="phone_number"
                placeholder="Ingrese su número de teléfono"
                onChange={onChangeRegister}
              ></Form.Control>
            </Card.Body>

            <Card.Body className="mt-3">
              <Card.Title>Correo electrónico</Card.Title>
              <Form.Control
                name="email"
                placeholder="Ingrese su correo electrónico"
                onChange={onChangeRegister}
              ></Form.Control>
            </Card.Body>

            <Card.Body className="mt-3">
              <Card.Title>Contraseña</Card.Title>
              <Form.Control
                name="password"
                placeholder="Ingrese su contraseña"
                type="password"
                onChange={onChangeRegister}
              ></Form.Control>
            </Card.Body>

            <Button 
              type="submit" 
              variant="warning" 
              className="mt-3" 
              onClick={handleSubmit}>
              Registrarse
            </Button>
          </Card>
        </Container>
      </Container>
    </>
  );
};
