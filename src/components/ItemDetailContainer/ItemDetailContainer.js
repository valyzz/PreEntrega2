import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

export default function ItemDetailContainer() {
  const [detail, setDetail] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch('/data/products.json')
        const products = await response.json()

        const selectedProduct = products.find((product) => product.id === Number(id))

        if (selectedProduct) {
          setDetail(selectedProduct)
        } else {
          console.error(`Producto con id ${id} no encontrado.`)
        }
      } catch (error) {
        console.error('Error al cargar los datos:', error)
      }
    }

    getProducts()
  }, [id])

  return (
    <div>
      {detail.id ? (
        <ItemDetail
          id={detail.id}
          name={detail.name}
          price={detail.price}
        />
      ) : (
        <p>Cargando detalles del producto...</p>
      )}
    </div>
  )
}
