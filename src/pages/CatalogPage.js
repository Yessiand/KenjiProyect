import ItemListContainer from "../components/ItemListContainer/ItemListContainer.js";

export default function CatalogPage({data}) {
    return (
        <>
            <ItemListContainer data={data}/>
        </>
    )
}