//importar librerias
import {Routes, Route} from "react-router-dom";

//importar las paginas
import Contacto from "../components/contacto";
import Home from "../components/home";
import Productos from "../components/productos";

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/productos" element={<Productos />} />
        </Routes>
    );
}

export default AppRouter;
