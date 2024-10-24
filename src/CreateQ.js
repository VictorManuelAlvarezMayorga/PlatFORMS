import { useState } from 'react';
import { Card, Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';

export const CreateQ = () => {
    const [options, setOptions] = useState(['']);

    const addOption = () => {
        setOptions([...options, '']);
    };

    const handleOptionChange = (index, value) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };

    const removeOption = (index) => {
        const newOptions = options.filter((_, i) => i !== index);
        setOptions(newOptions);
    };

    return (
        <Container>
            <Card className='mt-3' border='warning'>
                <Card.Body>
                    <Card.Title>Evaluación Docente</Card.Title>
                    <Form.Control placeholder='Ingresa titulo' className='mt-3'></Form.Control>
                </Card.Body>
            </Card>
            <Card border="warning" className='mt-3'>
                <Card.Body>
                    <Form>
                        <Form.Group>
                            <Row className="g-2, ml-2">
                                <Col md>
                                    <Form.Control
                                        placeholder="Pregunta"
                                        aria-label="Pregunta"
                                        aria-describedby="basic-addon2"
                                        className='mt-3'
                                    />
                                </Col>
                                <Col md>
                                    <Form.Select aria-label="Floating label select example" className='mt-3 ml-2'>
                                        <option>Tipos de Pregunta</option>
                                        <option value="1">Opción Múltiple</option>
                                        <option value="2">Pregunta Abierta</option>
                                        <option value="3">Verdadera o Falsa</option>
                                    </Form.Select>
                                </Col>
                            </Row>
                        </Form.Group>
                    </Form>

                    {options.map((option, index) => (
                        <InputGroup className="mb-3 mt-3 ml-2" key={index}>
                            <Form.Control
                                placeholder="Respuesta"
                                value={option}
                                onChange={(e) => handleOptionChange(index, e.target.value)}
                                aria-label="Respuesta"
                                aria-describedby="basic-addon2"
                            />
                            <Button
                                variant="outline-danger"
                                id="button-addon2"
                                onClick={() => removeOption(index)}
                            >
                                X
                            </Button>
                        </InputGroup>
                    ))}

                    <Button variant="warning" className='mt-3' onClick={addOption}>
                        Agregar Opciones
                    </Button>
                </Card.Body>
            </Card>
            <Button variant="warning" className='mt-3'>Agregar Pregunta</Button>
            <Button variant="warning" style={{ float: 'right' }} className='mt-3'>Guardar Cuestionario</Button>
        </Container>
    );
}
