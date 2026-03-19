import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './App.css'
export default function App() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 3;
  const totalPage = Math.ceil(data.length / perPage);
  
 

  const fetchData = async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setData(response.data);
    } catch (error) {
       console.log("error occured" , error)
    }
  }
  useEffect(()=>{
    fetchData()
  },[])
 const filterData = data.filter(item => (
   item.name.toLowerCase().includes(value.toLowerCase())
 ))

 const realData = filterData.slice((page - 1) * perPage, page * perPage )
   
 function handlePrev (){
  if(page <= 1) return 
  setPage(page - 1)
 }
 function handleNext (){
  if(page == totalPage) return 
  setPage(page + 1)
 }
  return (
    <div>
      <input 
      type="text"
      placeholder='Search...'
      value={value}
      onChange={(e) => setValue(e.target.value)}
      />
      {
        realData ? realData.map(item => (
          <div className="main" key={item.id}>
            <p>{item.name}</p>
            <p>{item.username}</p>
          </div>
          
        )) : <p>Loading...</p>
      }

      <button className='buttons'onClick={handlePrev} disabled={page <= 1}>Prev</button>
      <span></span>
      <button className='buttons' onClick={handleNext} disabled={page == totalPage}>Next</button>
      
    </div>
  )
}
