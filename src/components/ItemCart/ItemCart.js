import React from "react";
import { useCartContext } from "../../context/CartContext";
import styles from "./style/ItemCart.module.css";

const ItemCart = ({ product }) => {
   const {removeProduct} = useCartContext();
    return (
        <>
            <div className={`container ${styles.itemCart}`}>
                <div className="row">
                    <div className="col-md-3">
                        <img src={product.path} alt= {product.name} className={styles.imgItemCart}/>
                    </div>

                    <div className="col-md-9">
                        <p>Titulo: {product.name}</p>
                        <p>Cantidad: {product.quantity}</p>
                        <p>Precio c/u: {product.precio}</p>
                        <p>Subtotal: ${product.quantity * product.precio} </p>
                        <button onClick={() => removeProduct(product.id)}>Eliminar</button>
                    </div>
                </div>
                <hr/>
            </div>
        </>
    )
}

export default ItemCart