import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useProducts } from '../../Contex/ProductoContext';
import { useAuth } from '../../Contex/AuthContext';
import ReactLoading from 'react-loading';
import CardComponent from '../CardComponent/CardComponent'; // Asegúrate que este componente esté bien importado

function CategoriaProductos() {
  const { categoriaId } = useParams();
  const [products, setProducts] = useState([]);
  const [categoria, setCategoria] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); // Estado para manejar errores
  const { token } = useAuth(); // Obtén el token del contexto

  const filterProdsByCategoria = (products, category) => {
    return products.filter(product => product.categoria === category);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      if (!token) {
        setError('Token no encontrado. Inicia sesión nuevamente.');
        setIsLoading(false);
        return;
      }
      try {
        const response = await axios.get('http://localhost:5000/api/productos/', {
          headers: { Authorization: `Bearer ${token}` },
        });
       
        setProducts(response.data); // Corrige aquí: setProducts con response.data
        if (categoriaId) {
          const filteredProducts = filterProdsByCategoria(response.data, categoriaId);
          setCategoria(filteredProducts);
        } else {
          setCategoria(response.data);
        }
      } catch (error) {
        setError('Error fetching products.'); // Maneja el error
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [categoriaId, token]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className='titulo'>
        <h1>Bienvenidos a Techno Shop</h1>
      </div>
      {isLoading ? (
        <div className="loading-container">
          <ReactLoading type="spin" color="orange" height={200} width={200} />
        </div>
      ) : error ? ( // Si hay un error, mostrar un mensaje
        <div className="error-message">{error}</div>
      ) : (
        <div className="productos">
          {categoria.map((product) => (
            <CardComponent
              key={product.id}
              titulo={product.titulo}
              precio={product.precio}
              stock={product.stock}
              imagen={product.imagen}
              idProd={product.id}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default CategoriaProductos;
