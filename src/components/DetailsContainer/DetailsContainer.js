import React, {useState} from 'react';
import style from './style/DetailsContainer.module.css';

import ItemCount from '../ItemCount/ItemCount';
import { useCartContext } from '../../context/CartContext';

import { Link } from 'react-router-dom';

export const DetailsContainer = ({data}) => {
    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext();
    
    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data, quantity);
    }
    return (
        <>
            <div className='container' style={{marginTop: '20px'}}>
                <div className='row'>
                    <div className='col-md-12'>
                        <p>
                            <Link to='/'>perfumes</Link> / producto / {data.id}
                        </p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-2'>
                        <img width="200" height="200" src={data.path}/>
                    </div>

                    <div className='col-md-10'>
                        <ul style={{listStyleType:'none', display:'inline-block'}} >
                            <li style={{padding:'10px'}}> <b>ID: </b>{data.id}</li>
                            <li style={{padding:'10px'}}> <b>Nombre: </b>{data.name}</li>
                            <li style={{padding:'10px'}}> <b>Precio: </b>{data.precio}</li>
                            <li style={{padding:'10px'}}> <b>Categoria: </b> {data.categoria}</li>
                            <li style={{padding:'10px'}}> <b>Descripcion: </b> {data.descripcion}</li>
                            <li style={{padding:'10px'}}>
                                {
                                    goToCart
                                        ? <Link to="/cart">Terminar compra</Link>
                                        : <ItemCount initial={0} stock={5} onAdd={onAdd} />
                                }    
                            </li>            
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DetailsContainer;