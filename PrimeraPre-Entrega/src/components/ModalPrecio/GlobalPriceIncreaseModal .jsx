import React, { useState } from 'react';
import axios from 'axios';

const GlobalPriceIncreaseModal = ({ token, onPricesUpdated }) => {
    const [percentage, setPercentage] = useState('');
    const [error, setError] = useState(null);

    const handlePriceIncrease = async () => {
        if (!percentage || isNaN(percentage) || parseFloat(percentage) <= 0) {
            setError('Por favor, ingrese un porcentaje válido mayor que 0.');
            return;
        }

        setError(null); // Limpiar errores previos

        try {
            const token = localStorage.getItem('token'); // Obtener el token almacenado
            const response = await axios.put(
                'https://tecnoshopback-1.onrender.com/api/productos/actualizar-todos-precios',
                { porcentaje: parseFloat(percentage) },
                {
                    headers: {
                        Authorization: `Bearer ${token}`, // Incluye el token en los encabezados
                    },
                }
            );

            if (response.data && response.data.productos) {
                onPricesUpdated(response.data.productos);
                alert('Precios actualizados con éxito.');
            } else {
                setError('No se han recibido productos actualizados.');
            }
        } catch (error) {
            console.error('Error al actualizar precios:', error);
            setError(error.response ? error.response.data.message : 'Hubo un problema al actualizar los precios.');
        }
    };

    return (
        <div>
            {/* Botón para abrir el modalaaa */}
            <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#priceIncreaseModal"
            >
                Aumentar precios globalmente
            </button>

            {/* Modal */}
            <div className="modal fade" id="priceIncreaseModal" tabIndex="-1" aria-labelledby="priceIncreaseModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="priceIncreaseModalLabel">Aumentar Precios</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {error && <div className="alert alert-danger">{error}</div>}

                            <div className="mb-3">
                                <label htmlFor="percentage" className="form-label">Porcentaje de aumento (%):</label>
                                <input
                                    type="number"
                                    id="percentage"
                                    value={percentage}
                                    onChange={(e) => setPercentage(e.target.value)}
                                    className="form-control"
                                    aria-describedby="percentageHelp"
                                />
                                <div id="percentageHelp" className="form-text">Ingrese un porcentaje mayor que 0.</div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-primary" onClick={handlePriceIncrease}>Aumentar Precios</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GlobalPriceIncreaseModal;
