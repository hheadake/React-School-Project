import React from 'react';
import { useGetOneTest } from '../../hooks/useTest';
import { useParams } from 'react-router-dom';
import AnswersCopmonent from './AnswersCopmonent';


const StudentsTest = () => {
  //toDo fix for loops
  const { testId } = useParams();
  const [test, setTest] = useGetOneTest(testId);
  const questionObject = Object.values(test)
  const questionValue = []
  const answers = []
  for (const element of questionObject) {
    if (element.question) {
      questionValue.push(element.question)
    }
    if (element.options) {
      for (const option of element.options) {
        answers.push(option.text)
      }
    }
  }

 

  return (
  <div className="container mx-auto p-4">
    <h1 className="text-3xl font-semibold text-gray-900 text-center font-serif mb-4">
      Quiz
    </h1>
    <form >
        <div className="space-y-4">

      {questionValue.map((q, qIndex) => (
          <div key={qIndex} className="p-4 bg-white rounded-xl shadow-md">
            <div className="mb-2">
              <input
                type="text"
                name='question'
                value={q}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              
            </div>
          </div>
          
          ))}

<div className="p-4 bg-white rounded-xl shadow-md">
          {answers.map(element => (
           
            <div className="mb-2">
              <input
                type="text"
                name='answer'
                value={element}
                className="dark:md:hover:bg-lime-600 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
)
)}
</div>
       

        </div>
    </form>
  </div>);
};

export default StudentsTest

