import React from 'react'

import { Card, Button, Container, Nav,Form, Row, Col, Table } from 'react-bootstrap'

export const Home = () => {
   
    return (
        <>
        <Nav variant="pills" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">HOME</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">BASES</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" >
          CREAR NUEVO CUESTIONARIO
        </Nav.Link>
      </Nav.Item>

      <Form className='position-absolute top-5 end-0 mt-3 me-4'>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button variant='outline-success' type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>

    </Nav>
               
            <Container>
                <Card className='mt-5'>
                    <Card.Body>
                        <Card.Title>Lista de Usuarios</Card.Title>
                        
                        <div className='text-end'>
                            <Button variant="outline-info"className='mt-3'>Agregar Usuario</Button>
                        </div>
            <Table striped border hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Firs Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
        <tr>
          <td>1</td>
          <td>Tom</td>
          <td>Holland</td>
          <td>tomholland@gmail.com</td>
        </tr>
        </tbody>
            </Table>
                    </Card.Body>
                </Card>
            </Container>

        </>

    )

        }
    