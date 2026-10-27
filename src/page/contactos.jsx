import "../css_components/contactos.css";

function Contactos() {
  const Envio = (evento) => {
    evento.preventDefault();
    alert("¡Gracias por contactarnos!");
  };

  return (
    <div className="contactos">
      <h1>Contactos</h1>
      <form onSubmit={Envio}>
        <div className="contactos-campo">
          <label htmlFor="nombre">Nombre</label>
          <input id="nombre" name="nombre" type="text" required />
        </div>

        <div className="contactos-campo">
          <label htmlFor="correo">Correo electrónico</label>
          <input id="correo" name="correo" type="email" required />
        </div>

        <div className="contactos-campo">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea id="mensaje" name="mensaje" rows="5" required />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contactos;