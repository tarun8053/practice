import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './Slices/CounterSlice';
import { fetchUser } from './Slices/ApiSlice';
import { fetchUsers } from './Slices/Api2Slice';

export default function App() {
  const count = useSelector(state => state.counter);
  const { data, loading, error } = useSelector(state => state.api)
  const dispatch = useDispatch();
  const { data2, loading2, error2} = useSelector(state => state.api2)
  console.log("data",
    data2
  )

  useEffect(()=>{
    dispatch(fetchUser())
    dispatch(fetchUsers())
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
      <h2>Second Api calling</h2>
      {
        loading2 ? <p>Loading...</p> :
        error ? <p>{error}</p> :
        data2.map((user) => <p key={user.id}>{user.name}</p>)
      }
    </div>
  )
}