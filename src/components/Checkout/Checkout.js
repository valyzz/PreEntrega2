import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'

const Checkout = () => {
  const { cartItems, total, clear } = useContext(CartContext)
  const [shippingAddress, setShippingAddress] = useState('')
  const [paymentInfo, setPaymentInfo] = useState('')

  const handleCheckout = () => {
    // Aquí puedes implementar la lógica de compra, como enviar la información del cliente al servidor y procesar el pago.
    // Por simplicidad, esta función solo limpia el carrito.
    clear()
    alert('¡Gracias por tu compra!')
  }

  return (
    <div>
      <h1>Detalle de la Compra</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - Cantidad: {item.quantity} - Precio: ${item.price * item.quantity}
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>

      <h2>Información de Envío</h2>
      <input
        type="text"
        placeholder="Dirección de Envío"
        value={shippingAddress}
        onChange={(e) => setShippingAddress(e.target.value)}
      />

      <h2>Información de Pago</h2>
      <input
        type="text"
        placeholder="Información de Pago"
        value={paymentInfo}
        onChange={(e) => setPaymentInfo(e.target.value)}
      />

      <button onClick={handleCheckout}>Completar Compra</button>
    </div>
  )
}

export default Checkout
