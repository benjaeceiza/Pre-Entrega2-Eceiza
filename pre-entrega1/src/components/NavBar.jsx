import CartWidget from "./CartWidget";
import logo from "../assets/logo-img.png"

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