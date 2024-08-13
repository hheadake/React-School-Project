import React from 'react'
import { useForm } from '../../hooks/formHooks'
import { useLogin } from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const login = useLogin();
  const navigate = useNavigate();
  const { values, changeStateHandler, submitHandler } = useForm(
    { email: '', password: '' },
    async ({ email, password }) => {
      try {
        await login(email, password)
        navigate('/')
 
      } catch (err) {
        console.log(err.message);
      }

    }


  )
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 space-y-6">
        <h1 className="text-3xl font-semibold text-gray-900 text-center font-serif">
          Вход
        </h1>
        <form onSubmit={submitHandler} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Email
            </label>
            <input type="email"
             id="email" 
            name="email"
            value={values.email}
            onChange={changeStateHandler}
             placeholder="Sokka@gmail.com"/>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <input type="password"
             id="login-password"
             value={values.password}
             onChange={changeStateHandler}
             name="password"/>
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-amber-400 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500 w-full"
          >
            Вход
          </button>
        </form>
        <p className="text-sm text-gray-600 text-center">
         Нямате регистрация? <a href="/signup" className="text-amber-400 hover:text-amber-500">Регистрирайте се</a>
        </p>
      </div>
    </div>
  )
}

export default Login