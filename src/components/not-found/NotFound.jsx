import { BtnClickMe } from "../botones/BtnClickMe"


export const NotFound = () => {
    return (
        <div className="flex text-center flex-col bg-gray-400">
            <img src="https://media.istockphoto.com/id/1083386460/es/foto/cerca-de-un-grizzly-oso-pardo-de-alaska-que-se-establecen-en-el-agua-mirando-hacia.jpg?s=2048x2048&w=is&k=20&c=FfLGMi65FbqCO1WfJMUzFS1CX6MB84rT4ZeN5Esw-RI=" alt="foto 404" />
            <h2 className="m-6">PAGINA NO ENCONTRADA...ZZZ</h2>
            <BtnClickMe texto={"Volver"} className="bg-green-900 py-2 px-9"/>
        </div>
    )
}

export default NotFound