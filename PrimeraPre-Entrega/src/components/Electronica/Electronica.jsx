import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../Contex/AuthContext';

function Electronica() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token } = useAuth(); // Obtén el token del contexto

  useEffect(() => {
    const fetchProducts = async () => {
      if (!token) {
        console.error('No token found');
        setError('No se encontró un token');
        setLoading(false);
        return;
      }

      try {
        console.log('Token:', token); // Verifica el token

        // Solicita todos los productos desde la API
        const response = await axios.get('http://localhost:5000/api/productos/', {
          headers: { 'Authorization': `Bearer ${token}` },
        });

        console.log('Respuesta completa:', response); // Verifica la respuesta completa
        console.log('Datos recibidos:', response.data); // Verifica los datos

        // Filtra los productos para obtener solo los de la categoría 'electronica'
        const filteredProducts = response.data.filter(product => product.categoria === 'electronica');
        console.log('Productos filtrados:', filteredProducts); // Verifica los productos filtrados
        
        // Actualiza el estado con los productos filtrados
        setProducts(filteredProducts);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch products', error);
        setError('Error al obtener los productos');
        setLoading(false);
      }
    };

    fetchProducts();
  }, [token]); // Dependencia del token

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div className="product-list">
        <h3>Lista de Productos de Electrónica</h3>
        {products.length === 0 ? (
          <p>No hay productos disponibles.</p>
        ) : (
          products.map(product => (
            <div key={product._id} className="product-card">
              <img src={`http://localhost:5000/${product.imagen}`} alt={product.nombre} />
              <h4>{product.nombre}</h4>
              <p>{product.descripcion}</p>
              <p>Precio: ${product.precio}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Electronica;




