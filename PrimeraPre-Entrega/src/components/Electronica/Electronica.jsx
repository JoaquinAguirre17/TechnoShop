import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../Contex/AuthContext';
import './Electronica.css'

function Electronica() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token } = useAuth(); // Obtén el token del contexto

  useEffect(() => {
    const fetchProducts = async () => {
      if (!token) {
        setError('Token no encontrado. Inicia sesión nuevamente.');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get('http://localhost:5000/api/productos/', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const electronicProducts = response.data.filter(
          (product) => product.categoria === 'Electrónica'
        );
        setProducts(electronicProducts); // Guardamos solo los productos electrónicos
      } catch (error) {
        setError(error.response?.data?.message || 'Error al obtener productos');
        console.error('Error al obtener productos', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [token]);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  // Renderizamos los productos electrónicos guardados en el estado
  return (
    <div className='productos-electronica'>
      <div className="product-list">
        <h3>Lista de Productos Electrónicos</h3>
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <img src={`http://localhost:5000/${product.imagen}`} alt={product.nombre} />
            <h4>{product.nombre}</h4>
            <p>{product.descripcion}</p>
            <p>Precio: ${product.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Electronica;






