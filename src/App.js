import { useState } from "react";
import { Button, Card, Container, Form, FormGroup } from "react-bootstrap";


const App = () => {
  const title = "Bienvenido a nuestra plataforma, inicia sesión.";
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [data, setData] = useState({});

  const onChange = (e) => {
    e.preventDefault();
    if (e.target.name == "email") {
      setemail(e.target.value)
    } else if (e.target.name == "password") {
      setpassword(e.target.value)
    }

    console.log(e.target.name)
    console.log(e.target.value)
  }

  const onChangeRegister = (e) =>{
    e.preventDefault();
    const nData = data;
    nData[e.target.name] = e.target.value;
    setData(nData);
  };

  const onSubmit = ()=>{
    console.log(data)
  }

  

  return (
    <Container className="mt-3">
      <Card>
        <Card.Body>
          <Card.Title>Registro de Usuarios.</Card.Title>
          <Form>
            <Form.Group>
              <Form.Label>Nombre(s):</Form.Label>
              <Form.Control  onChange={onChangeRegister} name="name" placeholder="Ingresar nombre(s)"/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Apellido(s):</Form.Label>
              <Form.Control onChange={onChangeRegister}  name="last_name" placeholder="Ingresar apellido(s)"/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Correo electrónico:</Form.Label>
              <Form.Control onChange={onChangeRegister}  name="email" placeholder="Ingresar correo electrónico"/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Contraseña:</Form.Label>
              <Form.Control onChange={onChangeRegister}  
              type="password"
              name="password" 
              placeholder="Mínimo 8 caracteres"/>
            </Form.Group><br></br>
            <Button onClick={()=>onSubmit()}variant="info">Registrarse</Button>
          </Form>
        </Card.Body>
      </Card>
      <br></br>
      <Card>
        <Card.Body>
          <Card.Title>
            {title}
          </Card.Title>
          <Form>
            <Form.Group>
              <Form.Label>Correo electrónico:</Form.Label>
              <Form.Control placeholder="Correo electrónico"
                type="email" name="email" onChange={onChange} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Contraseña:</Form.Label>
              <Form.Control placeholder="Ingresar contraseña" type="password" name="password" onChange={onChange} />
            </Form.Group>
            <br></br>
            <Button type="submit" variant="success">Iniciar sesión</Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default App;