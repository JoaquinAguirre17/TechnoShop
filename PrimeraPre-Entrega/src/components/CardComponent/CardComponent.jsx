import { useEffect, useRef, useState } from 'react'
import CardWidgetComponente from '../CardWidget/CardWidgetComponente'
import './CardComponent.css'
import BotonComponente from '../Boton/BotonComponente'


function CardComponent({ imagen, titulo,descripcion,_id }) {

    /* -------------------------------------------------------------------------- */


    /* -------------------------------------------------------------------------- */
    return (
        <>
            <div className="card"  >
                <img src={imagen} alt={titulo} ></img>
                <div className="card-body">
                    <h3 className="card-title">{titulo}</h3>
                    <p className="card-text">{descripcion}</p>
                </div>
            </div>
        </>
    )
}
export default CardComponent;
