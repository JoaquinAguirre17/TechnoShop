import { useState, useEffect } from 'react';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import './ProductManagement.css';

const ProductManagement = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ nombre: '', descripcion: '', precio: '', imagen: null, categoria: '' });
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [imagePreview, setImagePreview] = useState('');
    const [newProductImagePreview, setNewProductImagePreview] = useState('');

    const categorias = [
        "Electrónica",
        "Relojes",
        "Celulares"
    ];

    useEffect(() => {
        const fetchProducts = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('No token found');
                return;
            }

            try {
                const response = await axios.get('http://localhost:5000/api/productos/', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });
                setProducts(response.data);
            } catch (error) {
                console.error('Failed to fetch products', error);
            }
        };

        fetchProducts();
    }, []);

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

            const formData = new FormData();
            formData.append('nombre', newProduct.nombre);
            formData.append('descripcion', newProduct.descripcion);
            formData.append('precio', newProduct.precio);
            formData.append('categoria', newProduct.categoria);
            if (newProduct.imagen) {
                formData.append('imagen', newProduct.imagen);
            }

            const response = await axios.post('http://localhost:5000/api/productos/crear', formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });

            setProducts([...products, response.data]);
            setNewProduct({ nombre: '', descripcion: '', precio: '', imagen: null, categoria: '' });
            setNewProductImagePreview('');
        } catch (error) {
            console.error('Failed to add product', error);
        }
    };

    const handleCardUpdate = (product) => {
        setSelectedProduct(product);
        setImagePreview(`http://localhost:5000/${product.imagen}`);
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
            if (selectedProduct.imagen) {
                formData.append('imagen', selectedProduct.imagen);
            }

            const response = await axios.put(`http://localhost:5000/api/productos/${selectedProduct._id}`, formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });

            setProducts(products.map(p => p._id === response.data._id ? response.data : p));
            setSelectedProduct(null);
            setImagePreview('');
        } catch (error) {
            console.error('Failed to update product', error);
        }
    };

    const handleDeleteProduct = async (productId) => {
        const token = localStorage.getItem('token');
        if (!token) {
            console.error('No token found');
            return;
        }

        console.log('Product ID to delete:', productId);
        if (!productId) {
            console.error('Product not selected or missing ID');
            return;
        }

        try {
            const response = await axios.delete(`http://localhost:5000/api/productos/${productId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            console.log('Product deleted:', response.data);
            setProducts(products.filter(p => p._id !== productId));
        } catch (error) {
            if (error.response) {
                console.error('Error response from server:', error.response.data);
            } else if (error.request) {
                console.error('No response received:', error.request);
            } else {
                console.error('Error setting up the request:', error.message);
            }
        }
    };

    const handleNewProductImageChange = (e) => {
        const file = e.target.files[0];
        setNewProduct({ ...newProduct, imagen: file });
        setNewProductImagePreview(URL.createObjectURL(file));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedProduct({ ...selectedProduct, imagen: file });
            setImagePreview(URL.createObjectURL(file));
        }
    };

    return (
        <div className="product-management-container">
            <div className="section">
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
                    type="file"
                    name='imagen'
                    accept="image/*"
                    onChange={handleNewProductImageChange}
                />
                {newProductImagePreview && <img src={newProductImagePreview} alt="Preview" className="image-preview" />}
                <button onClick={handleAddProduct}>Añadir Producto</button>
            </div>

            <div className="section">
                <h3>Productos</h3>
                <div className="product-cards-container">
                    {products.map(product => (
                        <div key={product._id} className="product-card">
                            <img src={`http://localhost:5000/${product.imagen}`} alt={product.nombre} className="product-image" />
                            <div className="product-info">
                                <h4>{product.nombre}</h4>
                                <p>{product.descripcion}</p>
                                <p>Precio: ${product.precio}</p>
                                <button onClick={() => handleCardUpdate(product)}>Actualizar</button>
                                <button onClick={() => handleDeleteProduct(product._id)}>Eliminar</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedProduct && (
                <div className="section">
                    <h3>Actualizar Producto</h3>
                    <input
                        type="text"
                        value={selectedProduct.nombre}
                        onChange={(e) => setSelectedProduct({ ...selectedProduct, nombre: e.target.value })}
                    />
                    <select
                        value={selectedProduct.categoria}
                        onChange={(e) => setSelectedProduct({ ...selectedProduct, categoria: e.target.value })}
                    >
                        <option value="" disabled>Seleccionar Categoría</option>
                        {categorias.map((categoria, index) => (
                            <option key={index} value={categoria}>{categoria}</option>
                        ))}
                    </select>
                    <input
                        type="number"
                        value={selectedProduct.precio}
                        onChange={(e) => setSelectedProduct({ ...selectedProduct, precio: e.target.value })}
                    />
                    <input
                        type="text"
                        value={selectedProduct.descripcion}
                        onChange={(e) => setSelectedProduct({ ...selectedProduct, descripcion: e.target.value })}
                    />
                    <input
                        type="file"
                        name='imagen'
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                    {imagePreview && <img src={imagePreview} alt="Preview" className="image-preview" />}
                    <button onClick={handleUpdateProduct}>Actualizar Producto</button>
                </div>
            )}
        </div>
    );
};

export default ProductManagement;
