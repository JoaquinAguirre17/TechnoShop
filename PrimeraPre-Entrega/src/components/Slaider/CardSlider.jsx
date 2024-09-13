import React from 'react';
import { Carousel, Card, Button, Row, Col } from 'react-bootstrap';
import styles from './CardSlider.module.css'; // Importa los estilos del módulo

const CardSlider = () => {
  const products = [
    { id: 1, title: 'Producto 1', image: 'https://via.placeholder.com/150', description: 'Descripción del Producto 1' },
    { id: 2, title: 'Producto 2', image: 'https://via.placeholder.com/150', description: 'Descripción del Producto 2' },
    { id: 3, title: 'Producto 3', image: 'https://via.placeholder.com/150', description: 'Descripción del Producto 3' },
    { id: 4, title: 'Producto 4', image: 'https://via.placeholder.com/150', description: 'Descripción del Producto 4' },
    { id: 5, title: 'Producto 5', image: 'https://via.placeholder.com/150', description: 'Descripción del Producto 5' },
    { id: 6, title: 'Producto 6', image: 'https://via.placeholder.com/150', description: 'Descripción del Producto 6' },
    { id: 7, title: 'Producto 7', image: 'https://via.placeholder.com/150', description: 'Descripción del Producto 7' },
    { id: 8, title: 'Producto 8', image: 'https://via.placeholder.com/150', description: 'Descripción del Producto 8' },
    { id: 9, title: 'Producto 9', image: 'https://via.placeholder.com/150', description: 'Descripción del Producto 9' },
    { id: 10, title: 'Producto 10', image: 'https://via.placeholder.com/150', description: 'Descripción del Producto 10' },
    { id: 11, title: 'Producto 11', image: 'https://via.placeholder.com/150', description: 'Descripción del Producto 11' },
    { id: 12, title: 'Producto 12', image: 'https://via.placeholder.com/150', description: 'Descripción del Producto 12' },
    { id: 13, title: 'Producto 13', image: 'https://via.placeholder.com/150', description: 'Descripción del Producto 13' },
    { id: 14, title: 'Producto 14', image: 'https://via.placeholder.com/150', description: 'Descripción del Producto 14' },
    { id: 15, title: 'Producto 15', image: 'https://via.placeholder.com/150', description: 'Descripción del Producto 15' },
    { id: 16, title: 'Producto 16', image: 'https://via.placeholder.com/150', description: 'Descripción del Producto 16' },

    // Agrega más productos según necesites
  ];

  // Agrupar los productos en lotes de 3 o 4 para mostrarlos juntos en cada slide
  const chunkSize = 4; // Cambia a 4 si deseas mostrar 4 cards a la vez
  const groupedProducts = [];
  for (let i = 0; i < products.length; i += chunkSize) {
    groupedProducts.push(products.slice(i, i + chunkSize));
  }

  return (
    <Carousel interval={3000}>
      {groupedProducts.map((group, index) => (
        <Carousel.Item key={index}>
          <Row>
            {group.map((product) => (
              <Col key={product.id}>
                <Card className={styles.cardSlider}>
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Title className={styles.cardTitle}>{product.title}</Card.Title>
                    <Card.Text className={styles.cardText}>{product.description}</Card.Text>
                    <Button variant="primary">Ver Producto</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CardSlider;

