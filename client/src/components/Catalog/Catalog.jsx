import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useEffect } from 'react';
import gameAPI from '../../api/games-api';
const CatalogPage = () => {
//toDochange name
const [games, setGames] = useState([]);
useEffect(() => {
  gameAPI.getAll()
  .then(result => setGames(result));
}, []);


  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="grid grid-cols-1 gap-8 px-1 md:grid-cols-2 lg:grid-cols-3 md:p-2 xl:p-4">
          {games.map(item => (
            <li key={item._id} className="relative flex w-full gap-4 p-2 border border-gray-700 rounded hover:border-fuchsia-800 hover:shadow-fuchsia-600 transition-shadow duration-300 ease-in-out shadow-md">
              <div className="absolute flex justify-center gap-1 w-10 text-xl font-bold text-center text-green-800 -top-2 -left-2">
                <span className="self-end text-gray-800 text-sm">
                  1
                </span>
              </div>
              <Link to="/">
                <div className="w-full overflow-hidden rounded">
                  <img src={item.imageUrl} alt={item.name} className="object-cover my-auto rounded w-28 h-28" />
                </div>
              </Link>
              <div className="flex flex-col justify-between flex-grow gap-3 px-2">
                <div className="w-full">
                  <Link to="/">
                    <span className="font-semibold md:text-xl text-black hover:text-fuchsia-800">
                      {item.name} {item.familyName}
                    </span>
                  </Link>
                  {/* toDo add sreden uspeh */}
                  <p className="pt-1 text-sm text-black">
                    {item.year} клас
                  </p>
                </div>
                <div className="flex items-center justify-between gap-1">
                  <div className="text-sm text-gray-700">
                    {item.price}
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 text-gray-700 rounded cursor-pointer hover:bg-lime-200 transition-colors duration-300 ease-in-out">
                    
                    <span>
                      Details
                    </span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CatalogPage;