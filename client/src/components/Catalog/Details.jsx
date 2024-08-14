import React from 'react'
import { useGetOnestudent } from '../../hooks/useStudents'
import { useParams } from 'react-router-dom'
import DetailsComp from './DetailsComp'



// const initialValues = {
//     name: '',
//     familyName: '',
//     grade: '',
// }








const Details = () => {

const {studentId} = useParams()    
const [student, setStudent] = useGetOnestudent(studentId)




const arr = Object.values(student)




  return (

    
    <section>
      


       
      <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
   
      <div className="text-center mt-2">
       
       <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
    { <DetailsComp key={student._id} {...student} />}

        </ul>
        </div>


   
    <div className="p-4 border-t mx-8 mt-2">
        <button className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">Follow</button>
    
    </div>

</div>

</section>
  )
}

export default Details
