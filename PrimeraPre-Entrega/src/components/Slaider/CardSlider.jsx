import React, { useState, useEffect } from 'react';
import { Carousel, Card, Row, Col } from 'react-bootstrap';
import styles from './CardSlider.module.css';

const CardSlider = () => {
  const products = [
    { id: 1, title: 'RGB ESTRELLA DECORATIVA FUEGO ARTIFICIAL', image: 'https://droppers.com.ar/media/catalog/product/cache/4a6c60679a44375cb979bbec872434e5/g/-/g-ledfireworks_1_.jpg', description: ' Rgb Estrella Decorativa Fuegos Artificial' },
    { id: 2, title: 'PARLANTE SOUL XK50 ', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpPbSIuh9QXI453eaPtSKnkBqniZvQoYvMSg&s', description: 'Parlante SOUL XK50' },
    { id: 3, title: 'AURICULARES NOGA STORMER GRID ', image: 'https://acdn.mitiendanube.com/stores/001/593/734/products/st-grid-angulo1-cff293966ccd720bc716286067899952-640-0.jpg', description: 'Descripción del funda 3' },
    { id: 4, title: 'GAME BOX ', image: 'https://d22fxaf9t8d39k.cloudfront.net/6fb251fde0901300a166280c0b838c01f0ea9d8b21480348dbcc093dd571cfae326142.jpg', description: 'Descripción del funda 4' },
    { id: 5, title: 'PARLANTE CON MICROFONO MODEL-K52 ', image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/speaker/mobile-tablet-speaker/c/z/i/k52-rgb-light-karaoke-machine-with-2-wireless-mics-for-kids-original-imahfu73zervzn3w.jpeg?q=90&crop=false', description: 'Descripción del funda 5' },
    { id: 6, title: 'FUNDA PARA TABLET CON TECLADO BLUETOOTH', image: 'https://dazimportadora.com.ar/wp-content/uploads/2024/11/1-1.png', description: 'Descripción del funda 6' },
    { id: 7, title: 'COMBO GAMER NOGA NKB-413N ', image: 'https://acdn.mitiendanube.com/stores/001/593/734/products/nkb-413n-pack1-8e2642e62c8abf270916494446806474-1024-1024.jpg', description: 'Descripción del funda 7' },
    { id: 8, title: 'ARO DE LUZ RGB 25CM ', image: 'https://acdn.mitiendanube.com/stores/896/208/products/aro11-38b0921acde10ed06216091749556741-640-0.png', description: 'Descripción del funda 8' },
    
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
                <Card className="cardSlider">
                  <Card.Img className="cardImg" variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Title className="cardTitle">{product.title}</Card.Title>
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



