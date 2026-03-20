import React, { useState } from 'react'

export default function SelectAll() {

  const list = ["Apple", "Banana", "Mango", "Orange"];
  const [selctedItem, setSlectedItem] = useState([]);

  const handleselcetItem = (item) => {
    if(selctedItem.includes(item)){
      setSlectedItem(selctedItem.filter(i => i !== item))
    }else{
      setSlectedItem([...selctedItem, item]);
      console.log([...selctedItem, item])
    }
    
  }
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSlectedItem(list); // select all
    } else {
      setSlectedItem([]); // unselect all
    }
  }

  let isAllSelect = selctedItem.length === list.length;
  return (
    <div>

      <label>
        <input 
        type="checkbox"
        checked={isAllSelect}
        onChange={handleSelectAll}
        
        />
        Select All
      </label>

      {
        list.map((item, idx) => (
          <div key={idx}>
            <label>
              <input 
              type="checkbox"
              checked={selctedItem.includes(item)}
              onChange={() => handleselcetItem(item)}
               />
               {item}
            </label>
          </div>
        ))
      }
      
    </div>
  )
}
