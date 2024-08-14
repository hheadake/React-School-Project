import React from 'react'
import { useGetOneTest } from '../../hooks/useTest';
import { useParams } from 'react-router-dom';


const AnswersCopmonent = ({
answers,


}) => {
    const { testId } = useParams();
    

    
 

  
  return (
      <div className="flex items-center space-x-2 mb-2">
   {answers.map((a) => (
    <input
      type="text"
      value={a}
      readOnly
      className="hover:bg-amber-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
   ))}
    
    {/* /* <input
    type="radio"
    // name={question-${qIndex}}
    // checked={option.correct}
    
    className="ml-2"
  />  */}

</div>
  )
}

export default AnswersCopmonent

