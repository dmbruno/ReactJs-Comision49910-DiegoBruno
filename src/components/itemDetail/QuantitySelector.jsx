import { Boton } from "../botones/Boton";

const QuantitySelector = ({ cantidad, setCantidad }) => {

    const handleSumar = () => {
        setCantidad(cantidad + 1)
    }

    const handleRestar = () => {
        if (cantidad > 1)
        setCantidad(cantidad - 1)
    }

    return (
        <div className="flex gap-4 py-4">
            <Boton texto={"-"} onClick={handleRestar}></Boton>
            <span className="flex items-center font-bold">{cantidad}</span>
            <Boton texto={"+"} onClick={handleSumar}></Boton>
        </div>
    );
};

export default QuantitySelector;