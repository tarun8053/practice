import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../App.css'

export default function AddToCart() {
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);

    const fetchApi = async () => {
        try {
            const response = await axios('https://fakestoreapi.com/products'); 
            setData(response.data);
        } catch (error) {
            console.log("error occured", error)
        }
    }

    const handleAddtoCart = (item) => {
        let localData = JSON.parse(localStorage.getItem("cart")) || [];

        const isExist = localData.find(p => p.id === item.id);

        if (isExist) {
            localData = localData.map(p =>
                p.id === item.id
                    ? { ...p, quantity: p.quantity + 1 }
                    : p
            );
        } else {
            localData.push({ ...item, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(localData));
        totalPrice();
    }

    const totalPrice = () => {
        let localData = JSON.parse(localStorage.getItem("cart")) || [];

        if (localData.length === 0) {
            setTotal(0);
            return;
        }

        let total = localData.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
        );

        setTotal(total);
    }

    useEffect(() => {
        fetchApi();
        totalPrice();
    }, []);

    return (
        <div>
            {
                data.map(item => (
                    <div className='card' key={item.id}>
                        <p>{item.title}</p>
                        <p>₹{item.price}</p>
                        <button onClick={() => handleAddtoCart(item)}>
                            Add to cart
                        </button>
                    </div>
                ))
            }

            <h3>Total Price: ₹{total.toFixed(2)}</h3>
        </div>
    )
}