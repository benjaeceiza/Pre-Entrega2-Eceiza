import { useState } from "react";
import Item from "./Item";


const ItemList = ({ productos }) => {

   

    return (
        <>
            {productos.map(producto => (
                <div key={producto.id + 100} className="col-md-4 mt-5">
                    <Item productos={producto} />
                </div>
            ))}
        </>
    )
}

export default ItemList