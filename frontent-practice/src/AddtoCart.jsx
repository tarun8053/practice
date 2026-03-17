// // import React, { useState } from 'react'
// import './App.css'

// export default function App() {

//   const cards = [
//     { id: 1, name: "Tarun", title: "Frontend Developer", description: "Works with React, JavaScript, and modern UI technologies." },
//     { id: 2, name: "Rahul", title: "Backend Developer", description: "Specializes in Node.js, Express, and API development." },
//     { id: 3, name: "Aman", title: "Full Stack Developer", description: "Experienced with the MERN stack and web applications." },
//     { id: 4, name: "Priya", title: "UI/UX Designer", description: "Designs user-friendly interfaces and modern web layouts." },
//     { id: 5, name: "Neha", title: "Software Engineer", description: "Builds scalable applications using JavaScript and Python." },
//     { id: 6, name: "Arjun", title: "DevOps Engineer", description: "Handles CI/CD pipelines and cloud infrastructure." },
//     { id: 7, name: "Rohit", title: "Mobile App Developer", description: "Develops Android and iOS apps using React Native." },
//     { id: 8, name: "Ankit", title: "Data Analyst", description: "Analyzes data and builds dashboards using SQL and Python." },
//     { id: 9, name: "Simran", title: "QA Engineer", description: "Ensures software quality through testing and automation." },
//     { id: 10, name: "Karan", title: "Cloud Engineer", description: "Manages cloud services like AWS and Azure." }
//   ];

//  const [page, setPage] = useState(1);
//  const perPage = 3;

//  const totalPage = Math.ceil(cards.length / perPage);
//  const currentCards = cards.slice(
//   (page - 1) * perPage,
//   page * perPage
//  );

//  function handleprev (){
 
//   if(page == 1) return 
//  setPage(page - 1);
//  }
//   function handlenext (){
  
//     setPage(page + 1);

  
//  }
//   return (
//     <div>
//       <div className="flex">
//         {
//           currentCards.map((item) => (
//             <div className="card" key={item.id}>
//               <p>{item.name}</p>
//               <p>{item.title}</p>
//               <p>{item.description}</p>
//             </div>
//           ))
//         }
//       </div>

//       {/* Buttons */}
//       <button onClick={handleprev} disabled={page == 1}>Prev</button>
//       <span>page {page} of {totalPage}</span>
//       <button onClick={handlenext} disabled={page == totalPage}>Next</button>
      
//     </div>
//   )
// }