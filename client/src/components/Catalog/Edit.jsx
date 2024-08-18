import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetOnestudent } from '../../hooks/useStudents';
import { useForm } from '../../hooks/formHooks';
import studentAPI from '../../api/studentsApi';



const initialValues = {
    name: '',
    familyName: '',
    year: '',
    imageUrl: ''
}








const Edit = () => {

const navigate = useNavigate();
const {studentId} = useParams();
const [student, setStudent] = useGetOnestudent(studentId);



const {values, changeStateHandler, submitHandler} = useForm(Object.assign(initialValues, student), async (values) => {
    const updatedStudent = await studentAPI.update(studentId, values);
    navigate(`/studentDetails/${studentId}`)
})









  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 space-y-6">
        <h1 className="text-3xl font-semibold text-gray-900 text-center font-serif">
          Редактирай данни
        </h1>
   
      
        <form onSubmit={submitHandler} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="text">
              Име
            </label>
            <input
             type="text"
             id="name" 
            name="name"
            value={values.name}
            onChange={changeStateHandler}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Фамилия
            </label>
            <input 
           type="text"
             id="familyName" 
            name="familyName"
            value={values.familyName}
            onChange={changeStateHandler}
             />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Клас
            </label>
            <input 
            type="text"
             id="year" 
            name="year"
            value={values.year}
            onChange={changeStateHandler}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="image">
             Снимка
            </label>
            <input 
            type="text"
             id="imageUrl" 
            name="imageUrl"
            value={values.imageUrl}
            onChange={changeStateHandler}
             placeholder="Upload photo"/>
          </div>
          <button
            type="submit"
           className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-amber-400 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500 w-full"
          >
            Запази
          </button>
        </form>
      </div>
    </div>
  )
}

export default Edit
