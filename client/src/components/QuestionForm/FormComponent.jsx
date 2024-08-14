import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import testAPI from '../../api/testApi';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

const FormComponent = () => {
  const [questions, setQuestions] = useState([]);
  const testId = useParams();

  useEffect(() => {
    testAPI.getAll().then((result) => setQuestions(result));
  }, []);


  const {isAuthenticated,email,name,familyName,role,userID} = useContext(AuthContext);



// const owner = userID === student._ownerId;
  return (
    <div className="container mx-auto p-6">
      <div className="bg-white border border-gray-200 rounded-lg shadow-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {name}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
               {email}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {role}
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {questions.length > 0 ? (
              questions.map((q) => (
                <tr key={q._id}>
                  <td className="px-6 py-4 whitespace-nowrap">{familyName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link to={`/studentTest/${q._id}`}>
                      <button className="px-4 py-2 font-medium text-white bg-amber-400 rounded-md hover:bg-amber-600 focus:outline-none focus:ring-4 focus:bg-amber-400 active:bg-amber-600 transition duration-150 ease-in-out">
                        Тест
                      </button>
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="px-6 py-4 text-center" colSpan="5">
                  No test available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FormComponent