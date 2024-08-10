import { Link } from "react-router-dom"

const Item = ({ productos }) => {


    return (
        <> 
                <div className="card">
                <Link to ={'/item/' +productos.id}><img src={productos.imagen} className="card-img-top" alt={productos.nombre}/></Link>
                        <div className="card-body">
                            <p className="card-text"><b>{productos.nombre}</b></p>
                            <p><b>${productos.precio}</b></p>
                        </div>
                </div>
        </>


    )
}

export default Item