function Card({ title, description, image, precio, onAgregar }) {
  return (
    <article className="card">
      <img className="cardimg" src={image} alt={title} />
      <div className="cardcont">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Precio: ${precio}</p>
        <button className="boton-agregar" type="button" onClick={onAgregar}>
          Agregar al carrito
        </button>
      </div>
    </article>
  );
}

export default Card