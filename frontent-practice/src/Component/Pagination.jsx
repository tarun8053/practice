import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import '../App.css'
export default function Pagination() {
    const [data, setDate] = useState([]);
    const [page, setPage] = useState(1);
    const perPage = 3;
    const totalPage = Math.ceil(data.length / perPage);
    const fetchData = async () => {
        try {

            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            setDate(response.data);
            
        } catch (error) {
            console.log("Something went wrong", error)
        }
    }
    useEffect(()=> {
        fetchData();
    },[])
    const filterd = data.slice((page - 1) * perPage , page * perPage);

    const handlePrev = () => {
        if(page === 1) return;
        setPage(page - 1)
    }

    const handleNext = () => {
        if(page === totalPage) return;
        setPage(page + 1)
    }

  return (
    <>
    <div>
      {
        filterd.map((item) => (
            <div  className='card' key={item.id}>
                <p>{item.name}</p>
                <p>{item.email}</p>
            </div>
        ))
      }

      <button onClick={handlePrev} disabled={page === 1}>Prev</button>
      <span>{page} of {totalPage}</span>
      <button onClick={handleNext} disabled={page === totalPage}>Next</button>
    </div>
    </>
  )
}
