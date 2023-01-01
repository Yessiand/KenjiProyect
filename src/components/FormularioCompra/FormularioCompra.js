import React from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";

const FormularioCompra = ({handleId}) => {

    const {cart, totalPrice, clearCart} = useCartContext();

    const order = {
        nombre: '',
        telefono: '',
        ciudad: '',
        direccion: '',
        email: '',
        items: cart.map(product => ({id: product.id, producto: product.name, precio: product.precio, cantidad: product.quantity})),
        total: totalPrice()
    };

    const [infoUser, setInfoUser] = useState(order);

    const saveDataUser = async(e) => {  
        e.preventDefault()
        infoUser.nombre = e.target[0].value;
        infoUser.email = e.target[1].value;
        infoUser.telefono = e.target[2].value;
        infoUser.ciudad = e.target[3].value;
        infoUser.direccion = e.target[4].value;
        const db = getFirestore();
        const orderCollection = collection(db, 'loreto_ordenes_compra');
        addDoc(orderCollection, infoUser)
        .then((response) => {
            alert("Su compra ha sido realizada correctamente con el id: " + response.id)
            clearCart()
        });
    }

    return (
        <>
            <h1>Ingresa tus datos de envio:</h1>
            <form onSubmit={saveDataUser}>
                <div className="form-group">
                    <label for="nombreInput">Nombre</label>
                    <input type="text" className="form-control" id="nombreInput" aria-describedby="nombreHelp" placeholder="Jhon Smith"/>
                </div>
                <div className="form-group">
                    <label for="emailInput">Email</label>
                    <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="jhon.smith@correo.com"/>
                    <small id="emailHelp" className="form-text text-muted">Nunca compartiremos tu email con nadie.</small>
                </div>
                <div className="form-group">
                    <label for="telefonoInput">Telefono</label>
                    <input type="text" className="form-control" id="telefonoInput" aria-describedby="emailHelp" placeholder="3145668907"/>
                </div>
                <div className="form-group">
                    <label for="ciudadInput">Ciudad</label>
                    <input type="text" className="form-control" id="ciudadInput" aria-describedby="emailHelp" placeholder="Medellin"/>
                </div>
                <div className="form-group">
                    <label for="direccionInput">Direccion</label>
                    <input type="Direccion" className="form-control" id="direccionInput" aria-describedby="emailHelp" placeholder="Cra 56 # 56B- 07"/>
                </div>
                <br></br>
                <button type="submit" className="btn btn-primary">Terminar compra</button>
            </form>
        </>
    )
}

export default FormularioCompra;