import React from "react";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import Checkout from "../Checkout/Checkout";
import { Link } from "react-router-dom";
import styles from "./style/cart.module.css"

const Cart = () => {
    const { cart, totalPrice } = useCartContext();
    if (cart.length === 0) {
        return (
            <>
                <p>No hay productos en el carrito</p>
                <Link to='/'>Hacer compras</Link>
            </>
        );
    }

    return (
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            <div className={styles.totalPrice}>
                <h3>total: {totalPrice()}</h3>
            </div>
            <br></br>
            <Checkout/>
        </>
    );
}
export default Cart