
import "../css_components/header.css"
import { Link } from "react-router-dom";
import logo from "../assets/react.svg"

function Header() {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="Logo" />
                <h1>IphoneApple</h1>    
            </div>

            <nav>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/contactos">Contactos</Link>
                    <Link to="/productos">Productos</Link>
                </ul>
            </nav>
        </header>
    )    
}

export default Header
