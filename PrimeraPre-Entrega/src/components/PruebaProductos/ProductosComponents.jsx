import { useEffect, useState } from "react"
import { getCategoria, getProducts } from "../../asincronia.js"
import CardComponent from "../CardComponent/CardComponent.jsx"
import './ProductosComponent.css'

function ProductosComponent({ titulo, precio, stock, imagen }) {
    const [products, setProducts] = useState([])

   
    useEffect(() => {
        getProducts
            .then(data => setProducts(data))
    }, [])
  




    return (<>
        <div className="productos">
            {products.map((product) =>
                <CardComponent
                    titulo={product.titulo}
                    precio={product.precio}
                    stock={product.stock}
                    imagen={product.imagen}
                    idProd={product.id}
                
                    />)}
                    
        </div>
    </>
    )
}
export default ProductosComponent