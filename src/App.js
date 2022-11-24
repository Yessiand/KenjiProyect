import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";
import NavBarCustom from "./components/NavBarCustom/NavBarCustom.js";




export default function App() {
    return (
        <div className="App">
            <NavBarCustom/>
            <ItemListContainer/>
        </div>
    );
}