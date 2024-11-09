import { Container, Card, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { validarInicioSesion, conteoErrores } from "./Validaciones";

export const App= () => {
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
    const errores = validarInicioSesion(datos);
    
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
              <Card.Title>Correo electrónico</Card.Title>
              <Form.Control
                name="email"
                placeholder="Ingrese su correo electrónico"
                onChange={onChangeRegister}
              ></Form.Control>
            </Card.Body>

            

            <Button 
              type="submit" 
              variant="warning" 
              className="mt-3" 
              onClick={handleSubmit}>
              Iniciar Sesion
            </Button>
          </Card>
        </Container>
      </Container>
    </>
  );
};
