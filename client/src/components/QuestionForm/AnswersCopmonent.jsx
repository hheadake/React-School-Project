import React from 'react'



const AnswersCopmonent = ({
answers,
}) => {

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

</div>
  )
}

export default AnswersCopmonent

