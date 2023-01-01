import ItemCount from "./ItemCount";
import React from "react";



export const ItemListContainer= ({}) => {
const onAdd = (quantity) => {
    alert("Se agregaron" + quantity + " unidades.");
}
return (
    <>
        <ItemCount initial={1} stock={5} onAdd={onAdd} />
    </>
)
}
export default ItemListContainer;