import React, { useEffect } from "react";
import { useState } from 'react';
import style from './style/ItemCount.module.css';

export const ItemCount = ({ initial, stock, onAdd }) => {
        const [count, setCount] = useState(parseInt(initial));
        const drecrease = () => {
            setCount(count-1);
        }
        const increase = () => {
            setCount(count + 1);
        }
        useEffect(() => {
            setCount(parseInt(initial));
        }, [initial])
    return (
        <div className="counter">
            <button disabled={count < 1} onClick={drecrease} >-</button>
            <span>{count}</span>
            <button disabled={count >= stock} onClick={increase}>+</button>
            <div>
                <button disabled={stock <= 0 || count == 0} onClick= {()=> onAdd(count)} >Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount