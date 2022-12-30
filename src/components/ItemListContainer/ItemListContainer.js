import style from './style/ItemList.module.css';
import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { Link } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"


const ItemListContainer = () => {
    const params = useParams();
    let listHtmlObjets= [];

    const [data, setData] = useState([]);
    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'loreto_productos');

        if(params.categoryId == null) {
            getDocs(queryCollection)
            .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))))
            .catch(error => console.log(error.message))
        } else {
            const queryFilter = query(queryCollection, where('categoria', '==', params.categoryId));
            getDocs(queryFilter)
            .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))))
            .catch(error => console.log(error.message))
        }
    });
    

    data.forEach((element, index) => {
        listHtmlObjets.push(
            <div style={{ display:'inline-block', marginLeft:'100px',marginTop:'80px', padding:'10px', border:'2px solid grey', fontFamily:'cursive', fontSize:'16px',boxShadow:'0px 2.60465px rgba(0, 0, 0, 0.1)' }}  key={index + "__product"}>
                <ul style={{listStyleType:'none', display:'inline-block'}} >
                    <li style={{padding:'10px'}}> {element.name}</li>
                    <li style={{marginTop:'10px'}}> <img style={{width:'200px', height: '20 0px'}} src={element.path}/></li>
                    <li>
                        <Link to={'/perfumes/producto/' + element.id}>Ver detalles</Link>
                    </li>
                    
                </ul>
            </div>
        );
    }); 
    
    return (
        <>
        <div className= 'list'  >
            <h1 style={{fontFamily:'cursive',marginTop:'10px',marginLeft:'50px'}}>Bienvenidos a nuestro catalogo!</h1>
            {listHtmlObjets}
        </div>
        </>
    );
}

export default ItemListContainer;