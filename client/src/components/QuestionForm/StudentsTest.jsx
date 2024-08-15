import React from 'react';
import { useGetOneTest } from '../../hooks/useTest';
import { useParams } from 'react-router-dom';
import AnswersCopmonent from './AnswersCopmonent';


const StudentsTest = () => {
 
  const { testId } = useParams();
  const [test, setTest] = useGetOneTest(testId);
  
  const questionsWithAnswers = []


  for (const element of Object.values(test)) {
    if (element.question && element.options) {
      questionsWithAnswers.push({
        question: element.question,
        answers: element.options.map(option => option.text),
      });
    }
  }



  return (
    <div className="container mx-auto p-4">
    <h1 className="text-3xl font-semibold text-gray-900 text-center font-serif mb-4">
      Quiz
    </h1>
    <form>
      <div className="space-y-4">
        {questionsWithAnswers.map((item, qIndex) => (
          <div key={qIndex} className="p-4 bg-white rounded-xl shadow-md">
            <div className="mb-2">
              <input
                type="text"
                name="question"
                value={item.question}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                readOnly
              />
              <div className="p-4 bg-white rounded-xl shadow-md">
                <AnswersCopmonent answers={item.answers} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </form>
  </div>);
};

export default StudentsTest

