import { useState } from "react";


export default function DragDropCart() {
  const [products] = useState([
    { id: 1, name: "Shirt", price: 500 },
    { id: 2, name: "Shoes", price: 1000 },
    { id: 3, name: "Watch", price: 2000 }
  ]);

  const [cart, setCart] = useState([]);
  const [dragItem, setDragItem] = useState(null);

  // drag start
  const handleDragStart = (item) => {
    setDragItem(item);
  };

  // allow drop
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // drop into cart
  const handleDrop = () => {
    if (!dragItem) return;

    const exist = cart.find(item => item.id === dragItem.id);

    if (exist) {
      setCart(cart.map(item =>
        item.id === dragItem.id
          ? { ...item, qty: item.qty + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...dragItem, qty: 1 }]);
    }
  };

  return (
    <div style={{ display: "flex", gap: "50px" }}>
      
      {/* PRODUCTS */}
      <div>
        <h2>Products</h2>
        {products.map(item => (
          <div
            key={item.id}
            draggable
            onDragStart={() => handleDragStart(item)}
            style={{
              border: "1px solid black",
              padding: "10px",
              margin: "10px",
              cursor: "grab"
            }}
          >
            <p>{item.name}</p>
            <p>₹{item.price}</p>
          </div>
        ))}
      </div>

      {/* CART */}
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        style={{
          border: "2px dashed green",
          padding: "20px",
          minWidth: "200px"
        }}
      >
        <h2>Cart (Drop Here)</h2>

        {cart.map(item => (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>Qty: {item.qty}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

