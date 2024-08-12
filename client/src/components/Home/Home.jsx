import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
    <div className="mx-auto max-w-screen-xl px-6 lg:px-8 relative">
      <div className="relative flex h-16 space-x-10 w-full">
        <div className="flex justify-start">
          <a className="flex flex-shrink-0 items-center" href="/">
            {/* <img
              className="block h-8 w-auto"
              height="32"
              src="https://www.svgrepo.com/show/303650/neo-logo.svg"
              alt="Logo"
            /> */}
          </a>
        </div>
        
      </div>
    </div>
    <div className="max-w-7xl mx-auto relative">
      <div className="relative py-16 flex justify-center px-4 sm:px-0">
        <div className="max-w-3xl text-center">
          <div className="pb-4">
            <span className="inline-flex items-center rounded-2xl bg-lime-100 px-4 py-1.5 text-xs sm:text-sm font-serif font-medium text-lime-700">
              Unlock the potential of AI in education.
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 xl:text-6xl font-serif !leading-tight">
            Discover the future of teaching
          </h1>
          <p className="mt-4 text-lg sm:text-xl leading-8 text-gray-800 sm:px-16" style={{ whiteSpace: 'pre-line' }}>
            Empower your classroom with cutting-edge AI technology. Whether it's lesson planning or creating interactive learning materials, our AI service has got you covered.
          </p>
          <div className="mt-8 flex w-full space-x-8 justify-center">
            <Link to={'/catalog'}>
              <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-lime-600 hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500">
                Start now for free
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Home

