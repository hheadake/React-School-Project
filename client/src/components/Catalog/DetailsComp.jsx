import React from 'react'

const DetailsComp = ({
    imageUrl,
    name,
    familyName,
    year,
}) => {
   
    
    return (

        <li className="flex flex-col items-center justify-around">
          
            <div className="rounded-t-lg h-32 overflow-hidden">
                <img className="object-cover object-top w-full" src='https://media.istockphoto.com/id/692479436/vector/back-to-school-seamless-pattern-from-education-science-objects.jpg?s=612x612&w=0&k=20&c=ua6GFuXtA56AcXRY_2LmKKwoZqcKhfISBXjyTs-gHQM=' />
            </div>
            <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        
        <img className="object-cover object-center h-32" src={imageUrl}/>
        </div>
            <h4 className=" text-gray-900">{name} {familyName}</h4>
                <p className='text-gray-700'>клас {year}</p>
            
        </li>


    )
}

export default DetailsComp
