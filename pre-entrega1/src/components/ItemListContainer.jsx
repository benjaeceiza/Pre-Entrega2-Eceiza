
import { useEffect, useState } from "react";
import arrayProductos from "../json/productos.json";
import { Link, useParams } from "react-router-dom";


const ItemListContainer = () => {


  const [productos, setProductos] = useState(arrayProductos);

  const { idcategoria } = useParams();



  useEffect(() => {

    if (idcategoria) {
      setProductos(arrayProductos.filter(producto => producto.categoria == idcategoria));
    } else {
      setProductos(arrayProductos)
    }

  }, [idcategoria]);


  return (
    <div className="container my-5">
      <div className="row">

        {productos.map(producto => (

          <div key={producto.id} className="col-md-4 mt-5">
            <div className="card">
              <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
              <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">${producto.precio}</p>

              </div>
            </div>

          </div>
        ))}
      </div>
    </div>


  )
}

export default ItemListContainer