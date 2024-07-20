import { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductManagement.css';

const ProductManagement = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ nombre: '', precio: '', imagen: null });
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [imagePreview, setImagePreview] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            const token = localStorage.getItem('token'); // Obtener el token del almacenamiento local
            try {
                const response = await axios.get('http://localhost:5000/api/productos', {
                    headers: {
                        'Authorization': `Bearer ${token}`, // Incluir el token en las cabeceras
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
        const token = localStorage.getItem('token'); // Obtener el token del almacenamiento local
        const formData = new FormData();
        formData.append('nombre', newProduct.nombre);
        formData.append('precio', newProduct.precio);
        if (newProduct.imagen) {
            formData.append('imagen', newProduct.imagen);
        }

        try {
            const response = await axios.post('http://localhost:5000/api/productos', formData, {
                headers: {
                    'Authorization': `Bearer ${token}`, // Incluir el token en las cabeceras
                    'Content-Type': 'multipart/form-data', // Importante para enviar archivos
                },
            });
            setProducts([...products, response.data]);
            setNewProduct({ nombre: '', precio: '', imagen: null });
            setImagePreview('');
        } catch (error) {
            console.error('Failed to add product', error);
        }
    };

    const handleUpdateProduct = async () => {
        if (!selectedProduct) return;

        const token = localStorage.getItem('token'); // Obtener el token del almacenamiento local
        const formData = new FormData();
        formData.append('nombre', selectedProduct.nombre);
        formData.append('precio', selectedProduct.precio);
        if (selectedProduct.imagen) {
            formData.append('imagen', selectedProduct.imagen);
        }

        try {
            const response = await axios.put(`http://localhost:5000/api/productos/${selectedProduct.id}`, formData, {
                headers: {
                    'Authorization': `Bearer ${token}`, // Incluir el token en las cabeceras
                    'Content-Type': 'multipart/form-data', // Importante para enviar archivos
                },
            });
            setProducts(products.map(p => p.id === response.data.id ? response.data : p));
            setSelectedProduct(null);
        } catch (error) {
            console.error('Failed to update product', error);
        }
    };

    const handleDeleteProduct = async (id) => {
        const token = localStorage.getItem('token'); // Obtener el token del almacenamiento local
        try {
            await axios.delete(`http://localhost:5000/api/productos/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`, // Incluir el token en las cabeceras
                },
            });
            setProducts(products.filter(p => p.id !== id));
        } catch (error) {
            console.error('Failed to delete product', error);
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setNewProduct({ ...newProduct, imagen: file });
        setImagePreview(URL.createObjectURL(file));
    };

    return (
        <div className="product-management-container">
            <h2>Administrar Productos</h2>

            <div className="section">
                <h3>Añadir Producto</h3>
                <input
                    type="text"
                    placeholder="Nombre del producto"
                    value={newProduct.nombre}
                    onChange={(e) => setNewProduct({ ...newProduct, nombre: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Descripcion"
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
                    accept="image/*"
                    onChange={handleImageChange}
                />
                {imagePreview && <img src={imagePreview} alt="Preview" className="image-preview" />}
                <button onClick={handleAddProduct}>Añadir Producto</button>
            </div>

            <div className="section">
                <h3>Actualizar Producto</h3>
                <select
                    onChange={(e) => {
                        const product = products.find(p => p.id === e.target.value);
                        setSelectedProduct(product);
                    }}
                >
                    <option value="">Selecciona un producto</option>
                    {products.map(p => (
                        <option key={p.id} value={p.id}>{p.nombre}</option>
                    ))}
                </select>
                {selectedProduct && (
                    <>
                        <input
                            type="text"
                            value={selectedProduct.nombre}
                            onChange={(e) => setSelectedProduct({ ...selectedProduct, nombre: e.target.value })}
                        />
                        <input
                            type="number"
                            value={selectedProduct.precio}
                            onChange={(e) => setSelectedProduct({ ...selectedProduct, precio: e.target.value })}
                        />
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setSelectedProduct({ ...selectedProduct, imagen: e.target.files[0] })}
                        />
                        {selectedProduct.imagen && <img src={URL.createObjectURL(selectedProduct.imagen)} alt="Preview" className="image-preview" />}
                        <button onClick={handleUpdateProduct}>Actualizar Producto</button>
                    </>
                )}
            </div>

            <div className="section">
                <h3>Eliminar Producto</h3>
                <select
                    onChange={(e) => handleDeleteProduct(e.target.value)}
                >
                    <option value="">Selecciona un producto para eliminar</option>
                    {products.map(p => (
                        <option key={p.id} value={p.id}>{p.nombre}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default ProductManagement;
