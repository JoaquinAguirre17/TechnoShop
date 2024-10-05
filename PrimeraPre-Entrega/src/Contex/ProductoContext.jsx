// src/context/ProductContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext'; // Asegúrate de importar tu contexto de autenticación

const ProductoContext = createContext();

export const useProducts = () => {
  return useContext(ProductoContext);
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token } = useAuth(); // Obtenemos el token desde AuthContext

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
        setProducts(response.data); // Guardamos todos los productos
      } catch (error) {
        setError(error.response?.data?.message || 'Error al obtener productos');
        console.error('Error al obtener productos', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [token]);

  return (
    <ProductContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
};
