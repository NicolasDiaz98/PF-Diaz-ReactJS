import './ItemDetailContainer.css'
import { useState, useEffect } from "react"
//import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'Items', itemId)

        getDoc(docRef)
            .then(res => {
                const data = res.data()
                const productsAdapted = { id: res.id, ...data }
                setProduct(productsAdapted)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])


  return (
    <div>
      {
        loading ? 
        (<div className='Spinner'><span className="loader"></span></div>)
        :
        (<div className="ItemDetailContainer">
        <ItemDetail {...product} />
        </div>)
      }
    </div>
    
    
  )
}

export default ItemDetailContainer
