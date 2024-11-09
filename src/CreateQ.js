import { useState } from 'react';
import { Card, Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';

export const CreateQ = () => {
    const [questions, setQuestions] = useState([{ title: '', options: [''] }]);

    const addOption = (questionIndex) => {
        const newQuestions = [...questions];
        newQuestions[questionIndex].options.push('');
        setQuestions(newQuestions);
    };

    const handleOptionChange = (questionIndex, optionIndex, value) => {
        const newQuestions = [...questions];
        newQuestions[questionIndex].options[optionIndex] = value;
        setQuestions(newQuestions);
    };

    const removeOption = (questionIndex, optionIndex) => {
        const newQuestions = [...questions];
        newQuestions[questionIndex].options.splice(optionIndex, 1);
        setQuestions(newQuestions);
    };

    const addQuestion = () => {
        setQuestions([...questions, { title: '', options: [''] }]);
    };

    const handleQuestionChange = (index, value) => {
        const newQuestions = [...questions];
        newQuestions[index].title = value;
        setQuestions(newQuestions);
    };

    const removeQuestion = (index) => {
        const newQuestions = questions.filter((_, i) => i !== index);
        setQuestions(newQuestions);
    };

    return (
        <Container>
            <Card className='mt-3' border='warning'>
                <Card.Body>
                    <Card.Title>Evaluación Docente</Card.Title>
                    <Form.Control placeholder='Ingresa titulo' className='mt-3'></Form.Control>
                </Card.Body>
            </Card>
            {questions.map((question, questionIndex) => (
                <Card className='mt-3' border='warning' key={questionIndex}>
                    <Form.Group>
                        <Row className="g-2, ml-2">
                            <Col md>
                                <Form.Text>Ingresa el título de la pregunta</Form.Text>
                                <Form.Control
                                    placeholder="Título de la pregunta"
                                    value={question.title}
                                    onChange={(e) => handleQuestionChange(questionIndex, e.target.value)}
                                    aria-label="Pregunta"
                                    aria-describedby="basic-addon2"
                                    className='mb-3'
                                    required
                                />
                                {question.options.map((option, optionIndex) => (
                                    <InputGroup className="mb-3 mt-3 ml-2" key={optionIndex}>
                                        <Form.Control
                                            placeholder="Respuesta"
                                            value={option}
                                            onChange={(e) => handleOptionChange(questionIndex, optionIndex, e.target.value)}
                                            aria-label="Respuesta"
                                            aria-describedby="basic-addon2"
                                            required
                                        />
                                        <Button
                                            variant="outline-danger"
                                            id="button-addon2"
                                            onClick={() => removeOption(questionIndex, optionIndex)}
                                        >
                                            X
                                        </Button>
                                    </InputGroup>
                                ))}
                                <Button variant="warning" className='mt-3' onClick={() => addOption(questionIndex)}>
                                    Agregar Opciones
                                </Button>
                                <Button
                                    variant="outline-danger"
                                    id="button-addon2"
                                    onClick={() => removeQuestion(questionIndex)}
                                >
                                    Eliminar pregunta
                                </Button>
                            </Col>
                        </Row>
                    </Form.Group>
                </Card>
            ))}
            <Button variant="warning" className='mt-3' onClick={addQuestion}>Agregar Pregunta</Button>
            <Button variant="warning" style={{ float: 'right' }} className='mt-3'>Guardar Cuestionario</Button>
        </Container>
    );
}
