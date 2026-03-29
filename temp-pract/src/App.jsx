import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { addTocart, removeCart } from './Slice/AddTocartSlice'
import './App.css' 
export default function App() {
  const data = [
  {
    "id": 1,
    "name": "Nike Shoes",
    "price": 2999,
    "image": "https://via.placeholder.com/150",
    "category": "Footwear"
  },
  {
    "id": 2,
    "name": "Adidas T-Shirt",
    "price": 999,
    "image": "https://via.placeholder.com/150",
    "category": "Clothing"
  },
  {
    "id": 3,
    "name": "Puma Jacket",
    "price": 2499,
    "image": "https://via.placeholder.com/150",
    "category": "Clothing"
  },
  {
    "id": 4,
    "name": "Apple iPhone 14",
    "price": 69999,
    "image": "https://via.placeholder.com/150",
    "category": "Electronics"
  },
  {
    "id": 5,
    "name": "Samsung Headphones",
    "price": 1999,
    "image": "https://via.placeholder.com/150",
    "category": "Electronics"
  },
  {
    "id": 6,
    "name": "Dell Laptop",
    "price": 55999,
    "image": "https://via.placeholder.com/150",
    "category": "Electronics"
  },
  {
    "id": 7,
    "name": "Wooden Chair",
    "price": 1499,
    "image": "https://via.placeholder.com/150",
    "category": "Furniture"
  },
  {
    "id": 8,
    "name": "Study Table",
    "price": 3499,
    "image": "https://via.placeholder.com/150",
    "category": "Furniture"
  }
]
  

  //  get cart data
  const cartItems = useSelector((state) => state.addTocart.data);
  const dispatch = useDispatch()
  console.log(cartItems)
  return (
    <div>
      {
    data.map((item) => (
    <div className="card" key={item.id}>
      <img className="img" src={item.image} alt={item.title} />

      <div className="card-content">
        <h3 className="title">{item.title}</h3>
        <p className="id">ID: {item.id}</p>
        <p className="price">Price: ₹{item.price}</p>
        <p className="category">Category: {item.category}</p>
      </div>

      <div className="btns">
        <button
          className="add"
          onClick={() => dispatch(addTocart(item))}
        >
          Add to Cart
        </button>

        <button
          className="remove"
          onClick={() => dispatch(removeCart(item.id))}
        >
          Remove
        </button>
      </div>
    </div>
  ))
}
    </div>
  )
}
