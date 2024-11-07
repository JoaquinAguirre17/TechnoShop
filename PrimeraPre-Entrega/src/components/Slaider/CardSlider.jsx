import React, { useState, useEffect } from 'react';
import { Carousel, Card, Row, Col } from 'react-bootstrap';
import styles from './CardSlider.module.css';

const CardSlider = () => {
  const products = [
    { id: 1, title: 'funda', image: 'https://via.placeholder.com/150', description: 'Descripción del funda 1' },
    { id: 2, title: 'funda ', image: 'https://via.placeholder.com/150', description: 'Descripción del funda 2' },
    { id: 3, title: 'funda ', image: 'https://via.placeholder.com/150', description: 'Descripción del funda 3' },
    { id: 4, title: 'funda ', image: 'https://via.placeholder.com/150', description: 'Descripción del funda 4' },
    { id: 5, title: 'funda ', image: 'https://via.placeholder.com/150', description: 'Descripción del funda 5' },
    { id: 6, title: 'funda ', image: 'https://via.placeholder.com/150', description: 'Descripción del funda 6' },
    { id: 7, title: 'funda ', image: 'https://via.placeholder.com/150', description: 'Descripción del funda 7' },
    { id: 8, title: 'funda ', image: 'https://via.placeholder.com/150', description: 'Descripción del funda 8' },
    { id: 9, title: 'funda ', image: 'https://via.placeholder.com/150', description: 'Descripción del funda 9' },
    { id: 10, title: 'funda', image: 'https://via.placeholder.com/150', description: 'Descripción del funda 10' },
    { id: 11, title: 'funda', image: 'https://via.placeholder.com/150', description: 'Descripción del funda 11' },
    { id: 12, title: 'funda', image: 'https://via.placeholder.com/150', description: 'Descripción del Producto 12' },
  ];

  const [chunkSize, setChunkSize] = useState(4); // Tamaño inicial para dispositivos grandes

  useEffect(() => {
    const updateChunkSize = () => {
      if (window.innerWidth < 576) setChunkSize(1);
      else if (window.innerWidth < 768) setChunkSize(2);
      else if (window.innerWidth < 992) setChunkSize(3);
      else setChunkSize(4);
    };

    window.addEventListener('resize', updateChunkSize);
    updateChunkSize();

    return () => window.removeEventListener('resize', updateChunkSize);
  }, []);

  const groupedProducts = [];
  for (let i = 0; i < products.length; i += chunkSize) {
    groupedProducts.push(products.slice(i, i + chunkSize));
  }

  return (
    <Carousel interval={3000} className="mb-4">
      {groupedProducts.map((group, index) => (
        <Carousel.Item key={index}>
          <Row className="justify-content-center">
            {group.map((product) => (
              <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Card className={styles.cardSlider}>
                  <Card.Img className={styles.cardImg} variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Title className={styles.cardTitle}>{product.title}</Card.Title>
                    <Card.Text className={styles.cardText}>{product.description}</Card.Text>
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



