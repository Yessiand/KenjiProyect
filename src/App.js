import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";
import NavBarCustom from "./components/NavBarCustom/NavBarCustom.js";
import { useEffect, useState } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import menus from './mocks';
import categorias from './mockCategories';
import productos from "./mockProductos.js";

import Home from "./pages/HomePage.js";



export default function App() {
    

    return (
        <BrowserRouter>
            <NavBarCustom menus={menus} categorias={categorias}/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/categoria/:id" element={<ItemListContainer data={productos}/>}/>
            </Routes>
        </BrowserRouter>
      
    );
}