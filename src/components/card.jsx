function Card({ title, description, image }) {
    return (
        <article className="card">
            <img className="cardimg" src={image} alt={title} />
            <div className="cardcont">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </article>
    )
}

export default Card