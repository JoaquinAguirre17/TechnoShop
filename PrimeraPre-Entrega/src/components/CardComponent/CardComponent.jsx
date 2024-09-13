import { useEffect, useRef, useState } from 'react'
import CardWidgetComponente from '../CardWidget/CardWidgetComponente'
import './CardComponent.css'
import BotonComponente from '../Boton/BotonComponente'


function CardComponent({ imagen, titulo,descripcion,idProd }) {

    /* -------------------------------------------------------------------------- */


    /* -------------------------------------------------------------------------- */
    return (
        <>
            <div className="card"  >
                <img src={imagen} alt={titulo} ></img>
                <div className="card-body">
                    <h3 className="card-title">{titulo}</h3>
                    <p className="card-text">{descripcion}</p>
                    <ul className='botones'>
                        <BotonComponente nombre={'Ver Detalle'} ruta={`/detalle/${idProd}`} />
                    </ul>
                </div>
            </div>
        </>
    )
}
export default CardComponent;
