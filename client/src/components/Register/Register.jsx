import React from 'react'
import { useRegister } from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/formHooks';

const initialValues = { email: '', password: ''};

const Register = () => {

const register = useRegister();
const navigate = useNavigate();

const registerHandler = async ({email, password}) => {
  
  try {
    await register(email, password)
    navigate('/')

  } catch (err) {
    console.log(err.message)
  }

};
const {values, changeStateHandler, submitHandler} = useForm(initialValues, registerHandler)


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 space-y-6">
        <h1 className="text-3xl font-semibold text-gray-900 text-center font-serif">
         Регистрация
        </h1>
        <form className="space-y-4" onSubmit={submitHandler}>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              name='email'
              value={values.email}
              onChange={changeStateHandler}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 sm:text-sm"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              name='password'
              value={values.password}
              onChange={changeStateHandler}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 sm:text-sm"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-lime-600 hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500 w-full"
          >
            Регистрация
          </button>
        </form>
        
      </div>
    </div>
  )
}

export default Register