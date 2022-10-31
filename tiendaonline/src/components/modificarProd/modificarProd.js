import React from "react";
import './modificarProd.css';

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';



export function ModificarP({ productos }) {
    return <React.Fragment>
        <Container>
            <Row>
                <Col sm className="left">
                    <h4>Productos</h4><br />
                    {productos.map((item) => {
                        return (
                            <p>{item.nombre}</p>
                        )
                    })}
                </Col>
                <Col sm><img src="https://http2.mlstatic.com/D_NQ_NP_867437-MCO49471632011_032022-O.webp"></img></Col>
                <Col sm>
                    <h4>Caracteristicas</h4><br />
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={3}>
                                Nombre
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" placeholder="" value="Rhea americana"/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                            <Form.Label column sm={3}>
                                Descripción
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control as="textarea" rows={5} placeholder="" value="suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque"/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={3}>
                                Precio
                            </Form.Label>
                            <Col sm={5}>
                                <Form.Control type="text" placeholder="" value="$4.08" className="right"/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={3}>
                                Unidades
                            </Form.Label>
                            <Col sm={3}>
                                <Form.Control type="text" placeholder="" value="20" className="right"/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Col sm={{ span: 10, offset: 2 }}>
                                <Button type="submit" variant="outline-dark">Guardar</Button>
                            </Col>
                        </Form.Group>
                    </Form>

                </Col>
            </Row>
        </Container>
    </React.Fragment>
}

/**
 * <section>
            <div className="divfather divcomun">
                <div className="abcd">
                    <h4>Productos</h4>
                    {productos.map((item) =>{
                        return (
                            <p>{item.nombre}</p>
                        )
                    })}
                </div>
                <div className="abcd">Imagen<img src="https://i.blogs.es/27b569/telefono/450_1000.jpeg"></img></div>
                <div className="abcd">
                    <h4>Caracteristicas</h4><br/>
                    Nombre: <br/>
                    Descripción: <br/>
                    Precio: <br/>
                    Disponibilidad: <br/>

                </div>
            </div>
        </section>
 */