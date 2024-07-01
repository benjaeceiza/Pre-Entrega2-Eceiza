
import logo from "../assets/logo-img.png"
import CarritoLogo from "../assets/carrito.png"

const CartWidget = () =>{

    return(
        <>
         <img src={CarritoLogo} alt="imagen de Carrito" />1
        </>
    )
}



const Navbar = () => {

    return (
        <>
            <div className="ContenedorBarra">
                <img className="Logo" src={logo} alt="Logo" />
                <ul className="Lista">
                <a className="Enlace" href="#"><li className="Item">Opción 1</li></a>
                <a className="Enlace" href="#"><li className="Item">Opción 2</li></a>
                <a className="Enlace" href="#"><li className="Item">Opción 3</li></a>
                <a className="Enlace" href="#"><li className="Item">{<CartWidget />}</li></a>
                </ul>
            </div>
        </>
    )
}

export default Navbar