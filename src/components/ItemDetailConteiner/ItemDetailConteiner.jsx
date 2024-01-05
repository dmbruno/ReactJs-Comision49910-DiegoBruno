import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../itemDetail/ItemDetail"
import { Loader } from "../Loader/Loader"
import { db } from "../../firebase/config"
import { doc, getDoc } from "firebase/firestore"




export const ItemDetailConteiner = () => {

    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState(null)

    const { itemId } = useParams()


    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, "productos", itemId)

        getDoc(docRef)
            .then((docSnapshot) => {
                const doc = {
                    ...docSnapshot.data(),
                    id: docSnapshot.id
                }
                setItem(doc)
            })
            .finally(()=> setLoading(false))


    }, [])

    return (
        <>
                {
                loading
                    ? (<Loader />)
                    : (<ItemDetail item={item} />
            )}
        </>
    )
}

