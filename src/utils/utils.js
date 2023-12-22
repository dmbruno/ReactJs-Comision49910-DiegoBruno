import  mock_data  from "../mock_data/data.json"


export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(mock_data)
        }, 1000)
    })
}