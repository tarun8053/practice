import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { dec, incr } from './Slices/PcounterSlice';

export default function App() {


  
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(incr())}>+</button>
      <p>{count}</p>
      <button onClick={() => dispatch(dec())}>-</button>
    </div>
  )
}