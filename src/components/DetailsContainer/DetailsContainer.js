import style from './style/DetailsContainer.module.css';

export default function DetailsContainer({data}) {
    return (
        <>
            <div className='container' style={{marginTop: '20px'}}>
                <div className='row'>
                    <div className='col-md-12'>
                        <p><a href='/perfumes'>perfumes</a> / producto / {data.id}</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-2'>
                        <img width="200" height="200" src={data.path}/>
                    </div>

                    <div className='col-md-10'>
                        <ul style={{listStyleType:'none', display:'inline-block'}} >
                            <li style={{padding:'10px'}}> <b>ID: </b>{data.id}</li>
                            <li style={{padding:'10px'}}> <b>Nombre: </b>{data.name}</li>
                            <li style={{padding:'10px'}}> <b>Precio: </b>{data.precio}</li>
                            <li style={{padding:'10px'}}> <b>Categoria: </b> {data.categoria}</li>
                            <li style={{padding:'10px'}}> <b>Descripcion: </b> {data.descripcion}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}