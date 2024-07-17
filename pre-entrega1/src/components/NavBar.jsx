
import logo from "../assets/logo-img.png"
import CartWidget from "./CartWidget";
import { Link,NavLink } from "react-router-dom";

const Navbar = () => {

    return (
        <>
            <div className="ContenedorBarra">
                <NavLink to="/" ><img className="Logo" src={logo} alt="Logo" /></NavLink>
                <ul className="Lista">
                <NavLink  className="Enlace" to={"category/jordan1"}><li className="Item">Jordan 1</li></NavLink>
                <NavLink  className="Enlace" to={"category/jordan4"}><li className="Item">Jordan 4</li></NavLink>
                <NavLink  className="Enlace" to={"category/skateboarding"}><li className="Item">Skateboarding</li></NavLink>
                <NavLink  className="Enlace" to={"category/airmax"}><li className="Item">Air Max</li></NavLink>
                <NavLink  className="Enlace" to={"cart"}><li className="Item">{<CartWidget/>}</li></NavLink>
                </ul>
            </div>
        </>
    )
}

export default Navbar