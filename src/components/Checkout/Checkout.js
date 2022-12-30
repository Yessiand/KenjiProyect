import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import FormularioCompra from "../FormularioCompra/FormularioCompra";

const Checkout = () => {

    const [orderId, setOrderId] = useState('');

    const handleId = (numeroDeOrden) => {
        setOrderId(numeroDeOrden);
    };

    if (orderId) {
        return (
            <div className="container">
                <p>Gracias por tu compra, te dejamos el número de orden:</p>
                <p>{' '}{orderId}</p>
                <Link to="/">Volver al inicio</Link>
            </div>
        );
    }

    return (
        <div>
            <FormularioCompra handleId={handleId}/>
        </div>
    );
};

export default Checkout;