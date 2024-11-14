import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from '../../Contex/CartContex';
import './ItemDetail.css';
import axios from 'axios';
import ReactLoading from 'react-loading';

function ItemDetail() {
    const { prodId } = useParams();
    const { addItem } = useCart();
    const [count, setCount] = useState(1);
    const [decrement, setDecrement] = useState(true);
    const [increment, setIncrement] = useState(false);
    const [showCompletePurchase, setShowCompletePurchase] = useState(false);
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            const token = localStorage.getItem('token'); // Obtener el token del almacenamiento local
            try {
                const response = await axios.get(`https://tecnoshopback-1.onrender.com/api/productos/${_id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`, // Incluir el token en las cabeceras
                    },
                });
                setProduct(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching product:', error);
                setIsLoading(false);
            }
        };

        fetchProduct();
    }, [prodId]);

    useEffect(() => {
        if (product) {
            setDecrement(count <= 1);
            setIncrement(count >= product.stock);
        }
    }, [count, product]);

    const handleInc = () => {
        if (count < product.stock) {
            setCount(count + 1);
        }
    };

    const handleDec = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handleAddToCart = () => {
        addItem(product, count);
        setShowCompletePurchase(true);
    };

    return (
        <>
            {isLoading ?
                (<div className="loading-container">
                    <ReactLoading type="spin" color="orange" height={200} width={200} />
                </div>)
                : (
                    <div className="producto">
                        <div className="productview card">
                            <img src={product.imagen} alt={product.nombre} />
                            <div className="card-body">
                                <h5 className="card-title">{product.nombre}</h5>
                                <p className="card-text">{product.descripcion}</p>
                                <p className="card-text">Price: ${product.precio}</p>
                                <p className="card-text">Stock: {product.stock}</p>
                                <ul className='contador-producto'>
                                    <li>
                                        <button onClick={handleDec} disabled={decrement}>➖</button>
                                    </li>
                                    <li>
                                        <p> {count} </p>
                                    </li>
                                    <li>
                                        <button onClick={handleInc} disabled={increment}>➕</button>
                                    </li>
                                </ul>
                                <ul className='botones-producto'>
                                    <li>
                                        {showCompletePurchase ? (
                                            <BotonComponente nombre={'Finalizar compra'} />
                                        ) : (
                                            <button onClick={handleAddToCart}>Añadir al carrito</button>
                                        )}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default ItemDetail;
