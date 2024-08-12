import React from 'react'
import { useGetOneTest } from '../../hooks/useTest';
import { useParams } from 'react-router-dom';


const AnswersCopmonent = () => {
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
      <div className="flex items-center space-x-2 mb-2">
   {answers.map((a) => (
    <input
      type="text"
      value={a}

      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
    /* <input
    type="radio"
    // name={question-${qIndex}}
    // checked={option.correct}
    
    className="ml-2"
  /> */
))}
</div>
  )
}

export default AnswersCopmonent