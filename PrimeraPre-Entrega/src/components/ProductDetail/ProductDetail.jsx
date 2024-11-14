import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams(); // Obtenemos el ID del producto desde la URL
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Simulamos una llamada a la API para obtener productos y filtrar por ID
        const fetchProduct = async () => {
            try {
                const response = await axios.get('https://tecnoshopback-1.onrender.com/api/productos/publicos');
                const productFound = response.data.find((item) => item._id === id);

                if (productFound) {
                    setProduct(productFound);
                } else {
                    setError('Producto no encontrado');
                }
            } catch (error) {
                setError('Error al cargar los detalles del producto');
            }
        };

        fetchProduct();
    }, [id]);

    // Si hay un error, mostrar mensaje
    if (error) {
        return <p className="error-message">{error}</p>;
    }

    // Si no se encuentra el producto, mostrar mensaje
    if (!product) {
        return (
            <div className="loading-container">
                <p>Cargando detalles del producto...</p>
            </div>
        );
    }

    return (
        <div className="product-detail-container">
            <div className="product-detail-card">
                <img
                    src={`https://tecnoshopback-1.onrender.com/${product.imagen}`}
                    alt={product.nombre}
                    className="product-detail-image"
                />
                <div className="product-detail-info">
                    <h2>{product.nombre}</h2>
                    <p className="product-price">Precio: ${product.precio}</p>
                    <p className="product-description">{product.descripcion}</p>
                </div>
                <button className="back-button" onClick={() => navigate(-1)}>
                    Volver
                </button>
            </div>
        </div>
    );
};

export default ProductDetail;
