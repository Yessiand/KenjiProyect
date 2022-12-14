import {useState} from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import NavBarCustom from "./components/NavBarCustom/NavBarCustom.js";
import menus from './menuRoutes';
import categorias from './mockCategories';
import productos from "./mockProductos.js";
import Home from "./pages/HomePage.js";
import CatalogPage from "./pages/CatalogPage.js";
import DetailsPage from "./pages/DetailsPage.js";
import CartProvider from "./context/CartContext"
import Cart from "./components/Cart/Cart.js";
import Checkout from "./components/Checkout/Checkout.js";
import Footer from "./components/Footer/Footer.js";


export default function App() {
    return (
        <BrowserRouter>
            <CartProvider>
                <NavBarCustom menus={menus} categorias={categorias}/>
                <Routes>
                    <Route exact path="/" element={<CatalogPage/>}/>
                    <Route exact path="/perfumes/categoria/:categoryId" element={<CatalogPage/>}/>
                    <Route exact path="/perfumes/producto/:productId" element={<DetailsPage/>}/>
                    <Route exact path="/cart" element={<Cart/>}/>
                    <Route exact path='/checkout' element={<Checkout/>}/>
                </Routes>
            </CartProvider>
            <Footer/>
        </BrowserRouter>
    );
}