import './Checkout.css'
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Timestamp, addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import { db } from "../../services/firebase/firebaseConfig"
import Footer from '../Footer/Footer'



const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name, phone, email 
                },
                items: cart,
                total: total(),
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, 'Items')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productsAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productsAddedToCart?.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })

            if(outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            } else {
                console.error('Hay productos sin stock disponible')
            }
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return <div className='Container-Title'><h1 className="Title">Se esta procesando su orden...</h1></div>
    }

    if(orderId) {
        return  <div className='Container-Title'>
                    <h1 className="Title">El ID de su orden es: {orderId}</h1>
                    <h2>Gracias por confiar en nosotros!</h2>
                    <img src="https://cdn2.mediotiempo.com/uploads/media/2020/05/11/iker-casillas-festejando-obtencion-mundial.jpg" alt="Iker Casillas" />

                    <Footer />
                </div>
    }

    return (
        <div className='Container-Title'>
            <h1 className="Title">Checkout</h1>
            <CheckoutForm onConfirm={createOrder}/>
            <Footer />
        </div>
    )
}

export default Checkout