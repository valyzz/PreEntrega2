import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

export default function ItemListContainer() {
  const [items, setItems] = useState([])
const { id } = useParams()

  const getProducts = async () => {
    const response = await fetch('/data/products.json')
    const products = await response.json()

    const filterProducts = products.filter(product => product.category === id)


    setItems(filterProducts)
  }

  useEffect(() => {
    getProducts()
  }, [id])

  return (
    <div className="container">
      <div className="row">
        {items.map((item) => (
          <div key={item.id} className="col-md-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={item.imagen} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.price}</Card.Text>
                <Link to={`/item/${item.id}`}>Ver Detalles</Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
