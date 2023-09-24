import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import  CartContext  from '../Context/CartContext'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'


const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if(totalQuantity === 0){
        return (
            <div>
                <h1>No hay productos en el carrito</h1>
                <link to='/' ClassName='Option'>Productos</link>
            </div>
        )
    }

    return (
        <div>
            { cart.map(p => <ItemDetailContainer key={p.id} {...p}/>) }
            <h2>Total: ${total}</h2>
            <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
            <Link to='/checkout' className='Option'>Checkout</Link>
        </div>
    )
}

export default Cart;
