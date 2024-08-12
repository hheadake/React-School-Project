import React from 'react'
import { useForm } from '../../hooks/formHooks'
import { useNavigate } from 'react-router-dom'
import { useAddStudent } from '../../hooks/useStudents'

const initialValues = {
    name: '',
    familyName: '',
    year: '',
    imageUrl: ''
}

const AddStudent = () => {

const navigate = useNavigate()
const addStudent = useAddStudent();

const addStudentHandler = async (values) => {
      
try {
   await addStudent(values)
    navigate('/')

} catch (err) {
    console.log(err)
}


 }

const {
     values,
     changeStateHandler,
     submitHandler
    } = useForm(initialValues, addStudentHandler)








  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 space-y-6">
        <h1 className="text-3xl font-semibold text-gray-900 text-center font-serif">
          Добави Ученик
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
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-lime-600 hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500 w-full"
          >
            Добави ученик
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddStudent
