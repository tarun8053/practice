import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './Slices/CounterSlice';
import { fetchUser } from './Slices/ApiSlice';

export default function App() {
  const count = useSelector(state => state.counter);
  const { data, loading, error } = useSelector(state => state.api)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchUser())
  },[dispatch])

  return (
    <div>
      <h2>Counter: {count}</h2>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>

      {
        loading ? <p>Loading...</p> :
        error ? <p>{error}</p> :
        data.map((user) => <p key={user.id}>{user.name}</p>)
      }
    </div>
  )
}