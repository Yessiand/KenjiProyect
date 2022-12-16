import productos from "../mockProductos.js";
import DetailsContainer from "../components/DetailsContainer/DetailsContainer.js";

import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';



export default function DetailsPage() {
    const navigate = useNavigate();
    const navigateToPerfumesPage = () => {
        navigate('/perfumes');
    };
    const params = useParams();
    let productDetails = productos.filter(element => element.id == params.productId);

    if (productDetails.length > 0) {
        productDetails = productDetails[0];
    }
    useEffect(() => {
        if (productDetails.length == 0) {
            navigateToPerfumesPage();
        }
    });
    return (
        <>
            <DetailsContainer data={productDetails} />
        </>
    )
}