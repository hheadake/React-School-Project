import React from 'react';
import { useForm } from '../../hooks/formHooks';
import { useAddTest} from '../../hooks/useTest';
import { useNavigate } from 'react-router-dom';

const QuizTable = () => {
    const addTest = useAddTest();
    const navigate = useNavigate();
   

    const initialValues = {
      questions: [
        {
          question: "",
          options: [
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: false },
          ],
        },
      ],
    };
  
    const submitCallBack = async (values) => {
      
      const formattedData = values.questions.map((q) => ({
        question: q.question,
        options: q.options.map((o) => ({
          text: o.text,
          correct: o.correct,
        })),
      }));
    
      try {
       
        await addTest(formattedData);
        navigate('/formCopmonent');
      } catch (err) {
        console.log('Error submitting quiz:', err);
      }
    };
    
    const {
      values: { questions },
      changeStateHandler,
      submitHandler,
    } = useForm(initialValues, submitCallBack);
  
    const addQuestion = () => {
      const newQuestions = [
        ...questions,
        {
          question: "",
          options: [
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: false },
          ],
        },
      ];
      changeStateHandler({
        target: {
          name: 'questions',
          value: newQuestions,
        },
      });
    };
  
    const editQuestion = (index, newQuestion) => {
      const updatedQuestions = [...questions];
      updatedQuestions[index].question = newQuestion;
      changeStateHandler({
        target: {
          name: 'questions',
          value: updatedQuestions,
        },
      });
    };
  
    const editOption = (qIndex, oIndex, newOption) => {
      const updatedQuestions = [...questions];
      updatedQuestions[qIndex].options[oIndex].text = newOption;
      changeStateHandler({
        target: {
          name: 'questions',
          value: updatedQuestions,
        },
      });
    };
  
    const markCorrect = (qIndex, oIndex) => {
      const updatedQuestions = [...questions];
      updatedQuestions[qIndex].options = updatedQuestions[qIndex].options.map((option, index) => ({
        ...option,
        correct: index === oIndex,
      }));
      changeStateHandler({
        target: {
          name: 'questions',
          value: updatedQuestions,
        },
      });
    };
  
    const deleteQuestion = (index) => {
      const updatedQuestions = questions.filter((_, i) => i !== index);
      changeStateHandler({
        target: {
          name: 'questions',
          value: updatedQuestions,
        },
      });
    };
  
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold text-gray-900 text-center font-serif mb-4">
          Quiz
        </h1>
        <form onSubmit={submitHandler}>
          <div className="space-y-4">
            {questions.map((q, qIndex) => (
              <div key={qIndex} className="p-4 bg-white rounded-xl shadow-md">
                <div className="mb-2">
                  <input
                    type="text"
                    name={questions[`${qIndex}`].question}
                    value={q.question}
                    onChange={(e) => editQuestion(qIndex, e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition ease-in-out duration-150 focus:ring-2 focus:ring-blue-500 hover:shadow-lg"
                  />
                </div>
                <div>
                  {q.options.map((option, oIndex) => (
                    <div key={oIndex} className="flex items-center space-x-2 mb-2">
                      <input
                        type="text"
                        name={questions[`${qIndex}`].options[`${oIndex}`].text}
                        value={option.text}
                        onChange={(e) => editOption(qIndex, oIndex, e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition ease-in-out duration-150 focus:ring-2 focus:ring-blue-500 hover:shadow-lg"
                      />
                      <input
                        type="radio"
                        name={questions[`${qIndex}`].correct}
                        checked={option.correct}
                        onChange={() => markCorrect(qIndex, oIndex)}
                        className="ml-2"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => deleteQuestion(qIndex)}
                    className="text-red-500"
                  >
                    изтрий
                  </button>
                </div>
              </div>
            ))}
          </div>
  
          <button
            type="button"
            onClick={addQuestion}
            className="mt-4 bg-sky-600 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
          >
            Добави въпроси
          </button>
          <button
            type="submit"
            className="mt-4 ml-4 bg-amber-400 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded"
          >
            Запази
          </button>
        </form>
      </div>
    );
  };
  
  export default QuizTable 