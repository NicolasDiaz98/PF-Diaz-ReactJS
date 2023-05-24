import { useState } from 'react'
import './CheckoutForm.css'

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [emailConfirm, setEmailConfirm] = useState('')
    const [error, setError] = useState('')

    const handleConfirm = (e) => {
        e.preventDefault()

        if(email !== emailConfirm) {
            return setError('Ambos campos de EMAIL deben ser iguales');
        }

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }

    return (
        <div className='Container'>
            <form onSubmit={handleConfirm} className='Form'>
                <label className='Label'>
                    Nombre completo
                    <input

                        className='Input'
                        type="text"
                        value={name}
                        onChange={({ target }) => setName(target.value)}
                        required 
                    />
                </label>
                <label className='Label'>
                    Teléfono
                    <input

                        className='Input'
                        type="text"
                        value={phone}
                        onChange={({ target }) => setPhone(target.value)}
                        required 
                    />
                </label>    
                <label className='Label'>
                    Email
                    <input

                        className='Input'
                        type="text"
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                        required 
                    />
                </label>
                <label className='Label'>
                    Confirmar Email
                    <input

                        className='Input'
                        type="text"
                        value={emailConfirm}
                        onChange={({ target }) => setEmailConfirm(target.value)}
                        required
                    />
                </label>

                {error && <p className='error'>{error}</p>}

                <div className='Label Label-Button'>
                    <button className='Button' type='submit'>Crear orden</button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm