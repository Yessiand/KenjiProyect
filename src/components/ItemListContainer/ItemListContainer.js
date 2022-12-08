import {useParams} from 'react-router-dom';

const ItemListContainer = ({data}) => {
    const params = useParams();
    let listHtmlObjets= [];
    data.forEach(element => {
        

        listHtmlObjets.push(
            <div>
                <ul>
                    <li>id: {element.id}</li>
                    <li>name: {element.name}</li>
                    <li>precio: {element.precio}</li>
                    <li>Categoria: {element.categoria}</li>
                    <li>foto: <img width="100" height="100" src={element.imagen}/></li>
                </ul>
            </div>
        );
    }); 
    return (
        <div >
            <h1>{listHtmlObjets}</h1>
        </div>
    );
}

export default ItemListContainer;