import { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import './ProductManagement.css';
import GlobalPriceIncreaseModal from '../ModalPrecio/GlobalPriceIncreaseModal ';

const ProductManagement = ({ categories, token }) => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ nombre: '', descripcion: '', precio: '', imagen: '', categoria: '', subcategoria: '' });
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [imagePreview, setImagePreview] = useState('');
    const [newProductImagePreview, setNewProductImagePreview] = useState('');
    const [error, setError] = useState(null);
    const [isEditing, setIsEditing] = useState(false); // Estado para controlar la edición
    const [globalPriceIncrease, setGlobalPriceIncrease] = useState('');

    const categorias = [
        "Electrónica",
        "Relojes",
        "Telefonia",
        "Gamer"
    ];

    const subcategorias = {
        "Electrónica": ["Auriculares", "Iluminacion", "Adaptadores", "Pendrive", "MicroSD", "Parlantes"],
        "Relojes": ["Montreal", "Digitales", "Niños", "Mallas"],
        "Telefonia": ["Cargadores", "Accesorios", "Fundas", "Cables", "Vidrios-Hidrogel", "Soporte-Auto"],
        "Gamer": ["Consolas", "Mouse", "Teclados", "Web Cam", "Cables-Consolas"]
    };


    useEffect(() => {
        const fetchProducts = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                setError('Token no encontrado. Por favor, inicia sesión.');
                return;
            }

            try {
                const response = await axios.get('https://tecnoshopback-1.onrender.com/api/productos/', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                // Verifica que la respuesta sea un array antes de asignarla a `products`
                if (Array.isArray(response.data)) {
                    setProducts(response.data);
                } else {
                    setError('La respuesta de productos no es válida.');
                }
            } catch (error) {
                setError('Error al obtener los productos. Intenta recargar la página.');
            }
        };
        fetchProducts();
    }, []);

    useEffect(() => {
        if (newProduct.imagen) {
            setNewProductImagePreview(newProduct.imagen); // Actualizar la vista previa
        }
    }, [newProduct.imagen]);

    useEffect(() => {
        if (selectedProduct?.imagen) {
            setImagePreview(selectedProduct.imagen); // Actualizar la vista previa cuando se edite un producto
        }
    }, [selectedProduct?.imagen]);

    const handleAddProduct = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            console.error('No token found');
            return;
        }
    
        try {
            const decodedToken = jwtDecode(token);
            const currentTime = Date.now() / 1000;
            if (decodedToken.exp < currentTime) {
                console.error('Token expired');
                return;
            }
    
            if (!newProduct.nombre || !newProduct.precio || !newProduct.descripcion || !newProduct.imagen) {
                setError('Por favor, completa todos los campos requeridos.');
                return;
            }
    
            const formData = new FormData();
            formData.append('nombre', newProduct.nombre);
            formData.append('descripcion', newProduct.descripcion);
            formData.append('precio', newProduct.precio);
            formData.append('categoria', newProduct.categoria);
            formData.append('subcategoria', newProduct.subcategoria);
            formData.append('imagen', newProduct.imagen);
    
            const response = await axios.post('https://tecnoshopback-1.onrender.com/api/productos/crear', formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });
    
            // Aquí se actualiza el estado de los productos correctamente
            setProducts((prevProducts) => [...prevProducts, response.data]); 
            setNewProduct({ nombre: '', descripcion: '', precio: '', imagen: '', categoria: '', subcategoria: '' });
            setNewProductImagePreview('');
            setError(null);
        } catch (error) {
            console.error('Failed to add product', error);
            setError('Hubo un problema al agregar el producto.');
        }
    };
    

    const handleCardUpdate = (product) => {
        setSelectedProduct(product);
        setIsEditing(true); // Activar la edición
        setImagePreview(product.imagen ? product.imagen : '');
    };

    const handleUpdateProduct = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            console.error('No token found');
            return;
        }
    
        if (!selectedProduct || !selectedProduct._id) {
            console.error('Product not selected or missing ID');
            return;
        }
    
        try {
            const decodedToken = jwtDecode(token);
            const currentTime = Date.now() / 1000;
            if (decodedToken.exp < currentTime) {
                console.error('Token expired');
                return;
            }
    
            const formData = new FormData();
            formData.append('nombre', selectedProduct.nombre);
            formData.append('precio', selectedProduct.precio);
            formData.append('descripcion', selectedProduct.descripcion);
            formData.append('categoria', selectedProduct.categoria);
            formData.append('subcategoria', selectedProduct.subcategoria);
            formData.append('imagen', selectedProduct.imagen);
    
            const response = await axios.put(`https://tecnoshopback-1.onrender.com/api/productos/${selectedProduct._id}`, formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });
    
            // Actualizar el estado de los productos correctamente después de actualizar un producto
            setProducts((prevProducts) =>
                prevProducts.map((p) => (p._id === response.data._id ? response.data : p))
            );
            setSelectedProduct(null);
            setIsEditing(false);
            setImagePreview('');
            setError(null);
        } catch (error) {
            console.error('Failed to update product', error);
            setError('Hubo un problema al actualizar el producto.');
        }
    };
    

    const handleDeleteProduct = async (id) => {
        const token = localStorage.getItem('token');
        if (!token) {
            console.error('No token found');
            return;
        }

        try {
            const decodedToken = jwtDecode(token);
            const currentTime = Date.now() / 1000;
            if (decodedToken.exp < currentTime) {
                console.error('Token expired');
                return;
            }

            await axios.delete(`https://tecnoshopback-1.onrender.com/api/productos/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            // Eliminar producto de la lista local
            setProducts(products.filter(product => product._id !== id));
        } catch (error) {
            console.error('Failed to delete product', error);
            setError('Hubo un problema al eliminar el producto.');
        }
    };
    const handlePricesUpdated = (updatedProducts) => {
        setProducts(updatedProducts);
    };
    
    
    
    
    
    return (

        <div className={`product-management-container ${isEditing ? 'actualizar-visible' : ''}`}>
            {error && <p className="error-message">{error}</p>}

            {/* Formulario para aumento global de precio */}
            {!isEditing && (
                <GlobalPriceIncreaseModal
                categories={categorias}
                token={token}
                onPricesUpdated={handlePricesUpdated}
            />
            )}

            {/* Formulario para añadir productos */}
            {!isEditing && (
                <div className="añadirProducto">
                    <h3>Añadir Producto</h3>
                    <input
                        type="text"
                        placeholder="Nombre del producto"
                        value={newProduct.nombre}
                        onChange={(e) => setNewProduct({ ...newProduct, nombre: e.target.value })}
                    />
                    <select
                        value={newProduct.categoria}
                        onChange={(e) => setNewProduct({ ...newProduct, categoria: e.target.value })}
                    >
                        <option value="" disabled>Seleccionar Categoría</option>
                        {categorias.map((categoria, index) => (
                            <option key={index} value={categoria}>{categoria}</option>
                        ))}
                    </select>
                    <select
                        value={newProduct.subcategoria}
                        onChange={(e) => setNewProduct({ ...newProduct, subcategoria: e.target.value })}
                    >
                        <option value="" disabled>Seleccionar Subcategoría</option>
                        {newProduct.categoria && subcategorias[newProduct.categoria]?.length > 0 ? (
                            subcategorias[newProduct.categoria].map((subcategoria) => (
                                <option key={subcategoria} value={subcategoria}>{subcategoria}</option>
                            ))
                        ) : (
                            <option value="" disabled>No hay subcategorías disponibles</option>
                        )}
                    </select>

                    <input
                        type="text"
                        placeholder="Descripción"
                        value={newProduct.descripcion}
                        onChange={(e) => setNewProduct({ ...newProduct, descripcion: e.target.value })}
                    />
                    <input
                        type="number"
                        placeholder="Precio del producto"
                        value={newProduct.precio}
                        onChange={(e) => setNewProduct({ ...newProduct, precio: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="URL de la imagen"
                        value={newProduct.imagen}
                        onChange={(e) => setNewProduct({ ...newProduct, imagen: e.target.value })}
                    />
                    {newProductImagePreview && <img src={newProductImagePreview} alt="Vista previa" className="image-preview" />}
                    <button onClick={handleAddProduct} disabled={!newProduct.nombre || !newProduct.precio || !newProduct.descripcion || !newProduct.imagen}>
                        Añadir Producto
                    </button>
                </div>
            )}

            {/* Lista de productos */}
            {!isEditing && (
                <div className="product-list">
                    <h3>Productos</h3>
                    <div className='conteiner-cards'>
                        <div className="product-cards">
                            {Array.isArray(products) && products.map((product) => (
                                <div key={product._id} className="product-card">
                                    {/* Imagen del producto */}
                                    {product.imagen && (
                                        <img src={product.imagen} alt={product.nombre} className="product-image" />
                                    )}
                                    <div className="product-info">
                                        <h4>{product.nombre}</h4>
                                        <p><strong>Precio:</strong> ${product.precio}</p>
                                    </div>
                                    <div className="product-actions">
                                        <button onClick={() => handleCardUpdate(product)}>Actualizar</button>
                                        <button onClick={() => handleDeleteProduct(product._id)}>Eliminar</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Formulario para actualizar producto */}
            {isEditing && selectedProduct && (
                <div className="editarProducto">
                    <h3>Actualizar Producto</h3>
                    <input
                        type="text"
                        value={selectedProduct.nombre}
                        onChange={(e) => setSelectedProduct({ ...selectedProduct, nombre: e.target.value })}
                    />
                    <input
                        type="text"
                        value={selectedProduct.descripcion}
                        onChange={(e) => setSelectedProduct({ ...selectedProduct, descripcion: e.target.value })}
                    />
                    <input
                        type="number"
                        value={selectedProduct.precio}
                        onChange={(e) => setSelectedProduct({ ...selectedProduct, precio: e.target.value })}
                    />
                    <input
                        type="text"
                        value={selectedProduct.imagen}
                        onChange={(e) => setSelectedProduct({ ...selectedProduct, imagen: e.target.value })}
                    />
                    {imagePreview && <img src={imagePreview} alt="Vista previa" className="image-preview" />}
                    <div className='botonesActualizar'>
                        <button onClick={handleUpdateProduct}>Actualizar Producto</button>
                        <button onClick={() => setIsEditing(false)}>Cancelar</button>
                    </div>
                </div>
            )}
        </div>

    );
}
export default ProductManagement;
