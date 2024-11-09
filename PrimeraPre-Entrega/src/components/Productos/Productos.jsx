import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../Contex/AuthContext';
import './Productos.css';

const Productos = () => {
    const { category, subcategory } = useParams();  // Obtenemos la categoría y subcategoría de la URL
    const { token } = useAuth();  // Token de autenticación
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            if (!token) {
                setError('Token no encontrado. Inicia sesión nuevamente.');
                setLoading(false);
                return;
            }

            try {
                // Realizamos la solicitud para obtener los productos
                const response = await axios.get('https://tecnoshopback-4fs3.onrender.com/api/productos/publicos', {
                    headers: { Authorization: `Bearer ${token}` },
                });

                console.log('Productos obtenidos:', response.data);
                console.log('Categoría:', category);
                console.log('Subcategoría:', subcategory);

                // Normalizamos las categorías y subcategorías
                const normalizedCategoryFilter = category ? category.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() : '';
                const normalizedSubcategoryFilter = subcategory ? subcategory.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() : '';

                // Filtramos los productos por categoría y subcategoría
                const filteredProducts = response.data.filter((product) => {
                    const normalizedCategory = product.categoria.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
                    const normalizedSubcategory = product.subcategoria ? product.subcategoria.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() : '';

                    // Comprobamos si el producto coincide con la categoría y subcategoría
                    const isMainCategoryMatch = normalizedCategory === normalizedCategoryFilter;
                    const isSubCategoryMatch = normalizedSubcategory === normalizedSubcategoryFilter;

                    console.log(`Producto: ${product.nombre}, Categoría: ${product.categoria}, Subcategoría: ${product.subcategoria}`);
                    console.log(`Coincide con categoría: ${isMainCategoryMatch}, Coincide con subcategoría: ${isSubCategoryMatch}`);

                    // Si se proporciona subcategoría, se verifica también; si no, solo por categoría
                    return isMainCategoryMatch && (isSubCategoryMatch || !subcategory);
                });

                console.log('Productos filtrados:', filteredProducts);
                setProducts(filteredProducts);
            } catch (error) {
                setError(error.response?.data?.message || 'Error al obtener productos');
                console.error('Error al obtener productos', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [token, category, subcategory]);  // Se vuelve a ejecutar cuando cambian estos valores

    // Si está cargando, mostramos el mensaje de carga
    if (loading) return <p>Cargando...</p>;

    // Si hay error, lo mostramos
    if (error) return <p>{error}</p>;

    return (
        <div className="product-cards-wrapper">
            <h2>Productos de {category}{subcategory && ` - ${subcategory}`}</h2>
            <div className="product-cards-container">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product._id} className="product-card">
                            <img src={`https://tecnoshopback-4fs3.onrender.com/${product.imagen}`} alt={product.nombre} className="product-image" />
                            <div className="product-info">
                                <h4>{product.nombre}</h4>
                                <p>{product.descripcion}</p>
                                <p>Precio: ${product.precio}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No hay productos disponibles en esta categoría.</p>
                )}
            </div>
        </div>
    );
};

export default Productos;

