import cesta from './assest/cesta.png'
import { Link } from 'react-router-dom'


const CartWidget = () =>  {
    const {totalQuantity} = useContext(CartContext)

    return (
        <Link to= '/cart'className='CartWidget' style={{ display: totalQuantity > 0 ? 'block' : 'none'}}>
            <img src={cesta} alt="cesta compra"  width="50" height="50" />
            { totalQuantity }
        </Link>
       
    )
}
export default CartWidget