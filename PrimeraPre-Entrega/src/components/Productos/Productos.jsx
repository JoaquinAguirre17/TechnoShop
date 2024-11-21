import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactLoading from 'react-loading';
import axios from 'axios';
import { useAuth } from '../../Contex/AuthContext';
import './Productos.css';
import BotonComponente from '../Boton/BotonComponente';

const Productos = () => {
    const { category, subcategory } = useParams(); // Obtenemos la categoría y subcategoría de la URL
    const { token } = useAuth(); // Token de autenticación
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            setError(null);

            try {
                // Configuración de headers opcional (solo si el token está disponible)
                const headers = token ? { Authorization: `Bearer ${token}` } : {};

                // Realizamos la solicitud para obtener los productos con filtros
                const response = await axios.get('https://tecnoshopback-1.onrender.com/api/productos/publicos', {
                    headers,
                    params: {
                        categoria: category,    // Filtro por categoría
                        subcategoria: subcategory, // Filtro por subcategoría
                    },
                });

                console.log('Productos obtenidos:', response.data);
                console.log('Categoría:', category);
                console.log('Subcategoría:', subcategory);

                // Filtramos los productos por categoría y subcategoría, aunque ya lo hacemos en la API
                const filteredProducts = response.data.filter((product) => {
                    const normalizedCategory = product.categoria
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "")
                        .toLowerCase();
                    const normalizedSubcategory = product.subcategoria
                        ? product.subcategoria.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
                        : '';

                    const normalizedCategoryFilter = category
                        ? category.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
                        : '';
                    const normalizedSubcategoryFilter = subcategory
                        ? subcategory.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
                        : '';

                    const isMainCategoryMatch = normalizedCategory === normalizedCategoryFilter;
                    const isSubCategoryMatch = normalizedSubcategory === normalizedSubcategoryFilter;

                    return isMainCategoryMatch && (isSubCategoryMatch || !subcategory);
                });

                setProducts(filteredProducts);
            } catch (error) {
                setError(error.response?.data?.message || 'Error al obtener productos');
                console.error('Error al obtener productos', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [token, category, subcategory]); // Se vuelve a ejecutar cuando cambian estos valores

    // Si está cargando, mostramos el componente ReactLoading
    if (loading) {
        return (
            <div className="loading-container">
                <ReactLoading type="spin" color="orange" height={200} width={200} />
            </div>
        );
    }

    // Si hay error, lo mostramos
    if (error) return <p className="error-message">{error}</p>;

    // Si no hay productos, mostramos un mensaje claro
    if (products.length === 0) {
        return (
            <div className="no-products-message">
                <p>No hay productos disponibles en la categoría {category}{subcategory && ` - ${subcategory}`}. Intenta con otra categoría o subcategoría.</p>
            </div>
        );
    }

    return (
        <div className="product-cards-wrapper">
            <h2>Productos de {category}{subcategory && ` - ${subcategory}`}</h2>
            <div className="product-cards-container">
                {products.map((product) => (
                    <div key={product._id} className="product-card">
                        <img
                            src={`https://tecnoshopback-1.onrender.com/${product.imagen}`}
                            alt={product.nombre}
                            className="product-image"
                        />
                        <div className="product-info">
                            <h4>{product.nombre}</h4>
                            <p>Precio: ${product.precio}</p>
                        </div>
                        <BotonComponente nombre={'Ver Detalle'} ruta={`/detalle/${product._id}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Productos;
