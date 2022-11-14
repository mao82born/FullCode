import React, { useState } from "react";
import "./productos.css";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";

/*      
id: "GGOEAFKA087499",
urlImagen: "https://i.blogs.es/27b569/telefono/450_1000.jpeg",
nombre: "Android Small Removable Sticker Sheet",
descripcion: "Show your Android pride by placing these 8 fun stickers on your technology products or accessories!",
características: "<p>8 Android stickers</p>\n<p>White colored sticker sheet</p>",
precio
*/

export function ProductosListAdmin({ productos }) {
  const [prodSelect, setProdSelect] = useState([]);

  function handleClick(e) {
    e.preventDefault();
    setProdSelect([...productos]);
  }

  return (
    <Container>
      <Row xs={1} md={4} className="g-4">
        {productos.map((item) => {
          return (
            <Col key={item.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={item.urlImagen}
                  className="imgProducto"
                />
                <Card.Body>
                  <Card.Title>{item.nombre}</Card.Title>
                  <Card.Text>
                    {item.precio}
                    <br />
                    Disponible: {item.cantidad}
                  </Card.Text>
                  <div className="center">
                    {prodSelect}
                    <Button
                      onClick={handleClick}
                      variant="outline-dark"
                      value="Editar"
                    >
                      Editar{" "}
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

/*
ProductosList.proptype = {
    id: PropTypes.number.isRequired, 
    urlImagen: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    features: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired
}*/

/**
 * <div className="imgProducto">
            
                <h5>{nombre}</h5>
                <img src={urlImagen} className="imgProducto"></img>
                <p>{descripcion}</p>
                <p>Cantidad: {features}</p>
                <p>{precio}</p>
                <button>Comprar</button>
            
    </div>
 */
