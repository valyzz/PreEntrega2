import { Link } from 'react-router-dom'



const ItemCount = ({stock, initial, onAdd})=> {
    const [quantity, setQuantity] = useState(initial)

    const increment = ()=>{
        if (quantity < stock){
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return(
        <div className='Counter'>
            <div className='Controls'>
                <button className="Button" onClick={decrement}>-</button>
                <h1 className='Number'>{quantity}</h1>     
                <button className="Button" onClick={increment}>+</button>       
            </div>
            <div>
                <button className="Button" onClick={() => onAdd(quantity)}>disable={!stock}> 
                Agregar al carrito
                </button>
            </div>

        </div>
    )
}