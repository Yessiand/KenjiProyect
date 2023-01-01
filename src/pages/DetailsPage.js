import productos from "../mockProductos.js";
import DetailsContainer from "../components/DetailsContainer/DetailsContainer.js";

import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import { getFirestore, doc, getDoc } from "firebase/firestore"



export default function DetailsPage() {
    const [productDetails, setData] = useState([]);
    const navigate = useNavigate();
    const params = useParams();
    const navigateToPerfumesPage = () => {
        alert('El producto no existe en la base de datos.')
        navigate('/');
    };
    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'loreto_productos', params.productId);

        getDoc(queryDoc)
        .then(res => {
            const data = {id: res.id, ...res.data()};
            if (data.hasOwnProperty('name')) {
                setData({id: res.id, ...res.data()});
            } else {
                navigateToPerfumesPage();
            }
        })
        .catch(error => console.log(error.message));
    },[]);
    return (
        <>
            <DetailsContainer data={productDetails} />
        </>
    )
}