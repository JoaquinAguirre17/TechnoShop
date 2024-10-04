// src/components/CategoriaProductos.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../../Contex/ProductoContext';

function CategoriaProductos() {
  const { categoria } = useParams(); // Obtén el parámetro de la ruta (categoría)
  const { products, loading, error } = useProducts(); // Consumimos los productos del contexto

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  // Filtramos los productos por la categoría de la URL
  const filteredProducts = products.filter(
    (product) => product.categoria.toLowerCase() === categoria.toLowerCase()
  );

  return (
    <div>
      <div className="product-list">
        <h3>Lista de Productos de la categoría: {categoria}</h3>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product._id} className="product-card">
              <img src={`http://localhost:5000/${product.imagen}`} alt={product.nombre} />
              <h4>{product.nombre}</h4>
              <p>{product.descripcion}</p>
              <p>Precio: ${product.precio}</p>
            </div>
          ))
        ) : (
          <p>No hay productos en esta categoría</p>
        )}
      </div>
    </div>
  );
}

export default CategoriaProductos;
