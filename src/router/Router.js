import NavBar from '../components/NavBar/NavBar'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import Cart from '../components/Cart/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


export default function Router() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<ItemListContainer greeting={'Nuestros Productos'} />} />
                <Route path='/category/:id' element={<ItemListContainer />} />
                <Route path='/item/:id' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<Cart/>} />
                <Route path='*' element={ <h1>404 NOT FOUND</h1>} />


            </Routes>

        </BrowserRouter>
    )
}