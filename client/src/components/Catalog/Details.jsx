import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useGetOnestudent } from '../../hooks/useStudents'
import { useParams } from 'react-router-dom'
import DetailsComp from './DetailsComp'
import { AuthContext } from '../../context/authContext'
import { useContext } from 'react'
import studentAPI from '../../api/studentsApi'







const Details = () => {

const {studentId} = useParams()    
const [student, setStudent] = useGetOnestudent(studentId)
const {isAuthenticated, userID} = useContext(AuthContext);
const navigate = useNavigate()


// const owner = userID === student._ownerId;
const removeStudent = async () => {

    try {
        await studentAPI.remove(studentId)
        navigate('/catalog')
    } catch (err) {
        console.log(err)
    }
}

  return (

    
    <section>
      


       
      <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
   
      <div className="text-center mt-2">
       
       <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
    { <DetailsComp key={student._id} {...student} />}

        </ul>
        </div>

          { owner && (<div className="p-4 border-t mx-8 mt-2 flex justify-around">

          <Link to={`/editStudent/${studentId}`} className="w-auto block bg-amber-400 rounded-full hover:bg-amber-600 hover:shadow-lg font-semibold text-white px-6 py-2">
            Редактирай
           </Link>
          <button onClick={removeStudent}
            
            className="w-auto block rounded-full bg-red-600 hover:bg-red-700 hover:shadow-lg font-semibold text-white px-6 py-2"
          > 
            Изтрий
          </button>
        </div>)}    
        

</div>

</section>
  )
}

export default Details
