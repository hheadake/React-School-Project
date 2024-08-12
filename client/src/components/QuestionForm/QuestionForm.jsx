import React from 'react'
import { useState } from 'react';

import { useForm } from '../../hooks/formHooks'
import { useNavigate } from 'react-router-dom'
import { useAddTest } from '../../hooks/useTest';
// import { useAddStudent } from '../../hooks/useStudents'

const initialValues = {
    question: '',
    points: '',
    option: '',
   
}



 

const QuestionForm = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([{ text: '', correct: false }]);
  

  const handleOptionChange = (index, e) => {
    const newOptions = options.slice();
    newOptions[index].text = e.target.value;
    setOptions(newOptions);
  };
  const handleCorrectChange = (index) => {
    const newOptions = options.slice();
    newOptions[index].correct = !newOptions[index].correct;
    setOptions(newOptions);
  };
 

  const addOption = () => {
    setOptions([...options, { text: '', correct: false }]);
  };

  const removeOption = (index) => {
    const newOptions = options.slice();
    newOptions.splice(index, 1);
    setOptions(newOptions);
  };




  
const navigate = useNavigate()
const addTest = useAddTest();

const addTestHandler = async (values) => {
      
try {
   await addTest(values)
    navigate('/')

} catch (err) {
    console.log(err)
}


 }

const {
     values,
     changeStateHandler,
     submitHandler
    } = useForm(initialValues, addTestHandler)


  return (
    <form onSubmit={submitHandler} className="bg-blend-overlay m-20 p-20 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <div>
      <h1 className="text-3xl font-semibold text-gray-900 text-center font-serif">
          Създай тест
        </h1>
        <label className="block text-gray-700 text-sm font-bold mb-2" >
          Въпрос
        </label>
        <textarea
          id="question"
          name='question'
          value={values.question}
          onChange={changeStateHandler}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          rows="4"
        />
      </div>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="points">
          Брой точки
        </label>
        <input
          type="number"
          id="points"
          name='points'
          value={values.points}
          onChange={changeStateHandler}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          min="1"
        />
      </div>
      <div>
        {options.map((option, index) => (
          <div key={index} className="flex items-center space-x-2 mb-2">
            <input
              type="text"
              name='options'
              value={option.text}
              onChange={(e) => handleOptionChange(index, e)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <input
              type="checkbox"
              name='checkbox'
              checked={option.correct}
              onChange={() => handleCorrectChange(index)}
              className="ml-2"
            />
            <span
              onClick={() => removeOption(index)}
              className="text-red-500 cursor-pointer"
            >
              &times;
            </span>
          </div>
        ))}
        
        
      </div>
      <div className="flex space-x-4">
      <button
     onClick={addOption}
       type="button" 
       className="text-black bg-white hover:bg-stone-200 focus:outline-none focus:ring-4 focus:ring-grey-500 font-small rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-grey-500 dark:hover:bg-grey-500 dark:focus:ring-grey-500">
        Добави въпрос</button>
        <button
         onClick={addTestHandler}
           className="text-black bg-white hover:bg-stone-200 focus:outline-none focus:ring-4 focus:ring-grey-500 font-small rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-grey-500 dark:hover:bg-grey-500 dark:focus:ring-grey-500"
        >
          Запази
        </button>
       
        
      </div>
    </form>
  );
};

export default QuestionForm;