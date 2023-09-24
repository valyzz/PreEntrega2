import React from 'react'
import { createContext } from 'react'
import { useState, useContext } from 'react'



const CartContext = createContext()

export function useCart() {
  return useContext(CartContext)
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  // Agregar un elemento al carrito
  const addItem = (item, quantity) => {
    // Verificar si el elemento ya está en el carrito
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      // Si el elemento ya existe, actualizamos la cantidad
      existingItem.quantity += quantity;
      setCartItems([...cartItems]);
    } else {
      // Si el elemento no existe, lo agregamos al carrito
      const newItem = { ...item, quantity };
      setCartItems([...cartItems, newItem]);
    }
  }

  // Eliminar un elemento del carrito por ID
  const removeItem = (itemID) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemID);
    setCartItems(updatedCart);
  }

  // Limpiar el carrito
  const clear = () => {
    setCartItems([]);
  }

  // Verificar si un elemento está en el carrito
  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  }

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem, clear, isInCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext

