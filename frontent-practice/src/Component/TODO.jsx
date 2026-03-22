import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function TODO() {
    const [value, setValue] = useState("");
    const [data, setData] = useState([]);
     useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("task")) || [];
        setData(stored);
    }, []);
    const handleClick = () => {
        if(value === "") return
        const updated = [...data, value];

        setData(updated);
        localStorage.setItem("task", JSON.stringify(updated));

        setValue("");
    }

    const handleDelete = (index) => {
        const updated = data.filter((_, i) => i !== index);
        setData(updated);
        localStorage.setItem("task", JSON.stringify(updated));
       
    }
  return (
    <div>
      <input 
      type="text"
      placeholder='Enter something...'
      value={value}
      onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleClick}>Add</button>
      
      {
        data.map((item, idx) => (
            <div key={idx}>
                <p>{item}</p>
                <button onClick={() => handleDelete(idx)}>Delete</button>
            </div>
        ))
      }
    </div>
  )
}
