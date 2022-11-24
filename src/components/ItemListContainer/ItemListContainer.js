

const ItemListContainer = (props) => {
    return (
        <div >
            <h1>{props.greeting}</h1>
            <h2>{props.title}</h2>
            <p>{props.phrase}</p>
        </div>
    );
}

export default ItemListContainer;