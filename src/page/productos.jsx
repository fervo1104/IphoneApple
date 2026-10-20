import Card from "../components/card.jsx"
import iphone18 from "../assets/images.jpg"
import iphone17 from "../assets/imagenes.jpg"
import IpadPro from "../assets/Neo.jpg"
import MackbookNeo from "../assets/Mac.webp"
import "../css_components/productos.css"

const produclista = [
    {
        title: "iPhone 18 Pro",
        description: "El iPhone 18 es el último modelo de la serie iPhone, con una pantalla Super Retina XDR y un rendimiento excepcional.",
        image: iphone18,
    },
    {
        title: "iPhone 17 Pro",
        description: "El iPhone 17 es el último modelo de la serie iPhone, con una pantalla Super Retina XDR y un rendimiento excepcional.",
        image: iphone17,
    },
    {
        title: "Ipad Pro",
        description: "El Ipad Pro es el último modelo de la serie Ipad, con una pantalla Liquid Retina XDR y un rendimiento excepcional.",
        image: IpadPro,
    },
    {
        title: "Mackbook Neo",
        description: "El Mackbook Neo es el último modelo de la serie Mackbook, con una pantalla Liquid Retina XDR y un rendimiento excepcional.",
        image: MackbookNeo,
    }
   
];

function Productos() {
    return (
        <section className="productos">
            <h1>Productos</h1>
        <div className="produclista">
            {produclista.map((producto) => (
                    <Card key={producto.title} {...producto} />
                )
            )}
        </div>
        </section>
    )
}


export default Productos
