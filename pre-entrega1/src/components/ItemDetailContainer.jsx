
import { useEffect, useState } from "react";
import arrayProductos from "../json/productos.json";
import { useParams } from "react-router-dom";
import Talles from "./Talles";


const ItemDetailConteiner = () => {

    const [detalle, setDetalle] = useState(arrayProductos)
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            setDetalle(arrayProductos.filter(producto => producto.id == id));



        } else {
            setDetalle(arrayProductos)
        }

    }, [id]);




    return (
        <div className="container my-5">
            <div key={id} className="row">
                {detalle.map(producto => (
                    <div className="col-md-4 mt-5">
                        <div className="card">
                            <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
                        </div>
                    </div>
                ))}
                <div className="col">
                {detalle.map(producto => (
                    <div className="col text-center my-5">
                        <h4>{producto.nombre}</h4>
                        <Talles></Talles>
                        <p className="descripcion">{producto.descrpcion}</p>
                        <div className="contenedor-precio-boton">
                        <p className="precio-detail">${producto.precio}</p>
                         <button className="boton-carrito-detail">Agregar a Carrito</button>
                        </div>

                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default ItemDetailConteiner