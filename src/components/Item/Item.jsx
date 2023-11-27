

export const Item = ({ nombre, description, precio }) => {

    return (
        <section className=" bg-yellow-500 conteiner-cards m-2">
            <img className="my-2 flex items-center justify-center" src="#" alt="*Foto de plato*" />
            <hr />
            <h2>{nombre}</h2>
            <p className="my-2">{description}</p>
            <hr />
            <p className="my-2">{precio}</p>
            <hr />
        </section>
    )
}
export default Item