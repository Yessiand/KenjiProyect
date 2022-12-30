import React from "react";
import style from "./style/ItemCart.module.css"
import { useCartContext } from "../../context/CartContext";

const ItemCart = ({ product }) => {
   const {removeProduct} = useCartContext();
    return (
        <>
        <div className='itemCart'  >
            <img src={product.path} alt= {product.name} />
            <div>
                <p>Titulo: {product.name}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio c/u: {product.precio}</p>
                <p>Subtotal: ${product.quantity * product.precio} </p>
                <button onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
        </>
    )
}

export default ItemCart