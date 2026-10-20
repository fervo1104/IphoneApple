import { Routes, Route } from "react-router-dom";
import Contactos from "./contactos.jsx";
import Home from "./home.jsx";
import Productos from "./productos.jsx";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contactos" element={<Contactos />} />
      <Route path="/productos" element={<Productos />} />
    </Routes>
  );
}

export default AppRouter;