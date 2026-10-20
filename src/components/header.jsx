
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
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contactos">Contactos</Link></li>
                    <li><Link to="/productos">Productos</Link></li>
                </ul>
            </nav>
        </header>
    )    
}


export default Header
