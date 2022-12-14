import style from './style/ItemList.module.css';
import {useParams} from 'react-router-dom';


const ItemListContainer = ({data}) => {
    const params = useParams();
    let listHtmlObjets= [];
    data.forEach((element, index) => {
        

        listHtmlObjets.push(
            <div style={{ display:'inline-block', marginLeft:'100px',marginTop:'80px', padding:'10px', border:'2px solid grey', fontFamily:'cursive', fontSize:'16px',boxShadow:'0px 2.60465px rgba(0, 0, 0, 0.1)' }}  key={index + "__product"}>
                <ul style={{listStyleType:'none', display:'inline-block'}} >
                    <li style={{padding:'10px'}}> {element.id}</li>
                    <li style={{padding:'10px'}}> {element.name}</li>
                    <li style={{padding:'10px'}}> {element.precio}</li>
                    <li style={{padding:'10px'}}>Categoria: {element.categoria}</li>
                    <li style={{marginTop:'10px'}}> <img width="" height="" src={element.path}/></li>
                </ul>
            </div>
        );
    }); 
    return (
        <div className= 'list'  >
            <h1 style={{fontFamily:'cursive',marginTop:'10px',marginLeft:'50px'}}>Bienvenidos a nuestro catalogo!</h1>
            <h1>{listHtmlObjets}</h1>
        </div>
    );
}

export default ItemListContainer;