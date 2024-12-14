import { useState } from 'react';
import axios from 'axios';

const GlobalPriceIncreaseModal = ({ token, onPricesUpdated }) => {
    const [percentaje, setPercentaje] = useState(''); // Variable de estado correcta
    const [error, setError] = useState(null);

    const handlePriceIncrease = async () => {
        // Validación del porcentaje ingresado
        if (!percentaje || isNaN(percentaje) || parseFloat(percentaje) <= 0) {
            setError('Por favor, ingrese un porcentaje válido mayor que 0.');
            return;
        }
    
        setError(null); // Limpiar errores previos
    
        // Obtener token desde props o localStorage
        const storedToken = token || localStorage.getItem('token');
        if (!storedToken) {
            setError('No se encontró un token válido. Por favor, inicie sesión nuevamente.');
            return;
        }
    
        try {
            // Enviar solicitud al backend para actualizar precios
            const response = await axios.put(
                'http://tecnoshopback-1.onrender.com/api/productos/actualizar-todos-precios',
                { porcentaje: parseFloat(percentaje) }, // Nombre corregido
                {
                    headers: {
                        Authorization: `Bearer ${storedToken}`, // Usa el token almacenado
                    },
                }
            );
    
            // Verificar la respuesta del backend
            if (response.data && response.data.productosActualizados) {
                onPricesUpdated(response.data.productosActualizados); // Notificar cambios al padre
                alert('Precios actualizados con éxito.');
            } else {
                setError('No se han recibido productos actualizados.');
            }
        } catch (error) {
            console.error('Error al actualizar precios:', error);
            setError(
                error.response?.data?.message || 'Hubo un problema al actualizar los precios.'
            );
        }
    };
    

    return (
        <div>
            {/* Botón para abrir el modal */}
            <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#priceIncreaseModal"
            >
                Aumentar precios globalmente
            </button>

            {/* Modal */}
            <div
                className="modal fade"
                id="priceIncreaseModal"
                tabIndex="-1"
                aria-labelledby="priceIncreaseModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="priceIncreaseModalLabel">
                                Aumentar Precios
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            {/* Mostrar errores si los hay */}
                            {error && <div className="alert alert-danger">{error}</div>}

                            <div className="mb-3">
                                <label htmlFor="percentage" className="form-label">
                                    Porcentaje de aumento (%):
                                </label>
                                <input
                                    type="number"
                                    id="percentage"
                                    value={percentaje}
                                    onChange={(e) => setPercentaje(e.target.value)}
                                    className="form-control"
                                    aria-describedby="percentageHelp"
                                />
                                <div id="percentageHelp" className="form-text">
                                    Ingrese un porcentaje mayor que 0.
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Cancelar
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handlePriceIncrease}
                            >
                                Aumentar Precios
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GlobalPriceIncreaseModal;

