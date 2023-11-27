import { Platos } from "./Platos"
import './Cards.css'

export const Cards = () => {
    return (
        <section className="flex flex-row justify-around">
            <Platos nombre="pollo" description="pollo al horno con papas" precio="$2550" />
            <Platos nombre="Bife a punto" description="a caballo con papas fritas" precio="$3550" />
            <Platos nombre="Wrap de pollo" description="wrap de pollo con queso" precio="$2600" />
            <Platos nombre="Mila Napo" description="Milanesa Napolitana" precio="$2900" />
        </section>
    )
}
