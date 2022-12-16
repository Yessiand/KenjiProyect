import {useState} from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import NavBarCustom from "./components/NavBarCustom/NavBarCustom.js";
import menus from './menuRoutes';
import categorias from './mockCategories';
import productos from "./mockProductos.js";
import Home from "./pages/HomePage.js";
import CatalogPage from "./pages/CatalogPage.js";
import DetailsPage from "./pages/DetailsPage.js";


export default function App() {
    const [data, setData] = useState([]);
    const getData = new Promise(resolve => {
        setTimeout(() => {
            resolve(productos);
        }, 1000)
    });
    getData.then(res => setData(res));

    return (
        <BrowserRouter>
            <NavBarCustom menus={menus} categorias={categorias}/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/perfumes" element={<CatalogPage data={data}/>}/>
                <Route exact path="/perfumes/categoria/:categoryId" element={<CatalogPage data={data}/>}/>
                <Route exact path="/perfumes/producto/:productId" element={<DetailsPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}