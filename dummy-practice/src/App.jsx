import React, { useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { decrement, increment } from './Slices/CounterSlice'
import { fetchUser } from './Slices/ApiSlice';
export default function App() {
    const count = useSelector((state) => state.counter)
    const data = useSelector((state) => state.api.data);
    const [page, setPage] = useState(1);
    const perPage = 3;
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchUser())
    },[dispatch])
    const totalpage = Math.ceil(data.length/perPage);
    const filterd = data.slice((page-1)*perPage, page*perPage);
    const handlePrev = () => {
        if(page == 1) return;
        setPage(page - 1)
    }
    const handleNext = () => {
        if(page == totalpage) return;
        setPage(page + 1)
    }

  return (
    <div>
      <button onClick={()=> dispatch(increment())}>+</button>
      {count}
      <button onClick={()=> dispatch(decrement())}>-</button>

      {
        filterd.map(item => (
           <div key={item.id}>
             <p>{item.id}</p>
             <p>{item.name}</p>
           </div>
        ))
      }
        <button onClick={handlePrev} disabled={ page == 1 }>Prev</button>
        <span>{page} of {totalpage}</span>
        <button onClick={handleNext} disabled={ page == totalpage }>Next</button>

    </div>
  )
}
