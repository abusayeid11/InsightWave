// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Advice = () => {
//   const [advice, setAdvice] = useState('');
//   const [favorites, setFavorites] = useState([]);

//   const fetchAdvice = async () => {
//     try {
//       const response = await axios.get('/api/advice');
//       setAdvice(response.data.slip.advice);
//     } catch (error) {
//       console.error('Error fetching advice:', error);
//     }
//   };

//   useEffect(() => {
//     fetchAdvice();
//     const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
//     setFavorites(savedFavorites);
//   }, []);

//   const addFavorite = () => {
//     const newFavorites = [...favorites, advice];
//     setFavorites(newFavorites);
//     localStorage.setItem('favorites', JSON.stringify(newFavorites));
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-blue-100">
//       <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
//         <h2 className="text-xl font-medium">Advice of the Day</h2>
//         <p className="text-gray-500">{advice}</p>
//         <button onClick={fetchAdvice} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//           Get New Advice
//         </button>
//         <button onClick={addFavorite} className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
//           Add to Favorites
//         </button>
//         <div className="mt-4">
//           <h3 className="text-lg font-medium">Favorites</h3>
//           <ul className="list-disc list-inside">
//             {favorites.map((fav, index) => (
//               <li key={index} className="text-gray-700">{fav}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Advice;


import axios from 'axios';
import React, { useEffect, useState } from 'react'



const Advice = () => {

    const [advice, setAdvice] = useState('');
    const [darkMode, setDarkMode] = useState(false);
    const [favorites, setFavorites] = useState([]);

    const fetchAdvice = async()=>{
        try {
            const response = await axios.get('/api/advice')

            setAdvice(response.data.slip.advice);


        } catch (error) {
            console.error('Error fetching advice:', error);
            
        }
    }

    useEffect(()=>{
        fetchAdvice();

        const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(savedFavorites);
    }, []);

    const addFavorite = ()=>{
        const newFavorites= [...favorites, advice];
        setFavorites(newFavorites);
        localStorage.setItem('favorites', JSON.stringify(newFavorites));
    }

  return (
    <>


    <div className ={`m-auto  ${darkMode? 'dark-mode':'bg-purple-200'} px-10 flex flex-col justify-center h-screen`}>

    <h2 className={`font-bold text-7xl py-10  `}>A good day starts with a good advice</h2>
    <div className='mr-60 flex flex-col   '>
    
    <div className='bg-green-400 text-3xl font-semibold py-10 rounded-lg shadow-md px-2'>{advice}</div>
    <div className='flex items-center justify-center'>
    <button className='btn ' onClick={fetchAdvice}>Get Advice</button>
    <button className='btn ' onClick={()=>setDarkMode(!darkMode)}>{darkMode? 'Light Mode':'Dark Mode'}</button>
   
    <button className='btn ' onClick={addFavorite}>Add to Favorite</button>
 
   </div> 
    </div>

    <div>
        <h3>Favorites</h3>
        <ul>
            {
                favorites.map((fav, index)=>(
                    <li key={index}>{fav}</li>
                ))
            }
        </ul>
    </div>

    </div>
    </>
  )
}

export default Advice