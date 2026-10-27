import { useState } from "react";
import Card from "../components/card.jsx";
import iphone18 from "../assets/images.jpg";
import iphone17 from "../assets/imagenes.jpg";
import IpadPro from "../assets/Neo.jpg";
import MackbookNeo from "../assets/Mac.webp";
import "../css_components/productos.css";

const produclista = [
  {
    title: "iPhone 18 Pro",
    description:
      "El iPhone 18 es el último modelo de la serie iPhone, con una pantalla Super Retina XDR y un rendimiento excepcional.",
    image: iphone18,
    precio: 1299,
  },
  {
    title: "iPhone 17 Pro",
    description:
      "El iPhone 17 es el último modelo de la serie iPhone, con una pantalla Super Retina XDR y un rendimiento excepcional.",
    image: iphone17,
    precio: 1099,
  },
  {
    title: "iPad Pro",
    description:
      "El iPad Pro es el último modelo de la serie iPad, con una pantalla Liquid Retina XDR y un rendimiento excepcional.",
    image: IpadPro,
    precio: 999,
  },
  {
    title: "MacBook Neo",
    description:
      "El MacBook Neo es el último modelo de la serie MacBook, con un rendimiento excepcional.",
    image: MackbookNeo,
    precio: 899,
  },
];

const formatoPrecio = (precio) => `$${precio.toLocaleString("es-MX")}`;

function Productos() {
  const [carrito, setCarrito] = useState([]);

  function agregarAlCarrito(producto) {
    setCarrito((carritoActual) => {
      const productoExistente = carritoActual.find(
        (item) => item.title === producto.title,
      );

      if (productoExistente) {
        return carritoActual.map((item) =>
          item.title === producto.title
            ? { ...item, cantidad: item.cantidad + 1 }
            : item,
        );
      }

      return [...carritoActual, { ...producto, cantidad: 1 }];
    });
  }

  function cambiarCantidad(titulo, cambio) {
    setCarrito((carritoActual) =>
      carritoActual
        .map((item) =>
          item.title === titulo
            ? { ...item, cantidad: item.cantidad + cambio }
            : item,
        )
        .filter((item) => item.cantidad > 0),
    );
  }

  const total = carrito.reduce(
    (suma, item) => suma + item.precio * item.cantidad,
    0,
  );

  return (
    <section className="productos">
      <h1>Productos</h1>
      <div className="produclista">
        {produclista.map((producto) => (
          <Card
            key={producto.title}
            {...producto}
            onAgregar={() => agregarAlCarrito(producto)}
          />
        ))}
      </div>

      <section className="carrito" aria-labelledby="titulo-carrito">
        <h2 id="titulo-carrito">Carrito de compras</h2>
        {carrito.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <>
            <ul className="carrito-lista">
              {carrito.map((item) => (
                <li className="carrito-item" key={item.title}>
                  <span>
                    {item.title} — {item.cantidad} x{" "}
                    {formatoPrecio(item.precio)} ={" "}
                    {formatoPrecio(item.precio * item.cantidad)}
                  </span>
                  <div className="carrito-controles">
                    <button
                      type="button"
                      aria-label={`Quitar una unidad de ${item.title}`}
                      onClick={() => cambiarCantidad(item.title, -1)}
                    >
                      −
                    </button>
                    <button
                      type="button"
                      aria-label={`Agregar una unidad de ${item.title}`}
                      onClick={() => cambiarCantidad(item.title, 1)}
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <p className="carrito-total">Total: {formatoPrecio(total)}</p>
          </>
        )}
      </section>
    </section>
  );
}

export default Productos;
