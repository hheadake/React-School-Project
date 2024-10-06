import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import studentAPI from '../../api/studentsApi';
const CatalogPage = () => {

  const [students, setStudents] = useState([]);
  useEffect(() => { 
    try {
      studentAPI.getAll()
      .then(result => setStudents(result));
    } catch (err) {
      console.log(err)
    }
   
  }, []);

 

  return (
    <div classNameName="bg-gray-100 min-h-screen py-12">
      <div classNameName="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul classNameName="grid grid-cols-1 gap-8 px-1 md:grid-cols-2 lg:grid-cols-3 md:p-2 xl:p-4">
          {students.length > 2 ? students.map(item => (
            <li key={item._id} classNameName="relative flex w-full gap-4 p-2 border border-gray-700 rounded hover:border-fuchsia-800 hover:shadow-fuchsia-600 transition-shadow duration-300 ease-in-out shadow-md">
              <div classNameName="absolute flex justify-center gap-1 w-10 text-xl font-bold text-center text-green-800 -top-2 -left-2">
              </div>
              <Link to="/">
                <div classNameName="w-full overflow-hidden rounded">
                  <img src={item.imageUrl} alt={item.name} classNameName="object-cover my-auto rounded w-28 h-28" />
                </div>
              </Link>
              <div classNameName="flex flex-col justify-between flex-grow gap-3 px-2">
                <div classNameName="w-full">
                  <Link to="/">
                    <span classNameName="font-semibold md:text-xl text-black hover:text-fuchsia-800">
                      {item.name} {item.familyName}
                    </span>
                  </Link>

                  <p classNameName="pt-1 text-sm text-black">
                    {item.year} клас
                  </p>
                </div>
                <div classNameName="flex items-center justify-between gap-1">
                  <div classNameName="text-sm text-gray-700">
                    {item.price}
                  </div>
                  



                    <Link to={`/studentDetails/${item._id}`} classNameName="flex items-center gap-1 px-2 py-1 text-gray-700 rounded cursor-pointer bg-amber-400 hover:bg-amber-600 transition-colors duration-300 ease-in-out">
                      Детайли
                    </Link>

                  
        

                  
                </div>
              </div>
            </li>
          )) : <section className="flex items-center h-screen p-16 bg-gray-50 dark:bg-gray-700">
          <div className="container flex flex-col items-center ">
              <div className="flex flex-col gap-6 max-w-md text-center">
                  <p className=" text-3xl dark:text-gray-300">Все още няма добавени ученици.</p>
                  <button
            type="submit"
           className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-amber-400 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500 w-full"
          >
            Добави ученик
          </button>
              </div>
          </div>
      </section>}
         
        </ul>
      </div>
    </div>
  );
};

export default CatalogPage;