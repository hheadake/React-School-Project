import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/authContext.jsx';

function NavBarComp() {
const {isAuthenticated} = useContext(AuthContext);


  return (
    <header className="bg-lime-600 text-white shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img
            className="h-10 w-auto"
            src="https://www.svgrepo.com/show/303650/neo-logo.svg"
            alt="Logo"
          />
          <h1 className="text-xl ml-4 font-semibold">Your Header Title</h1>
        </div>
        <nav className="space-x-4">


          {isAuthenticated ?
            (<><Link to={'/catalog'} className="text-white hover:text-lime-300">Дневник</Link>
              <Link to={'/formCopmonent'} className="text-white hover:text-lime-300">Тестове</Link>
              <Link to={'/quizForm'} className="text-white hover:text-lime-300">Създай тест</Link>
              <Link to={'/profile'} className="text-white hover:text-lime-300">Профил</Link>
              <Link to={'/addStudent'} className="text-white hover:text-lime-300">Добави ученик</Link>
              </>)
            :
            (
              <><Link to={'/register'} className="text-white hover:text-lime-300">Регистрация</Link>
                <Link to={'/login'} className="text-white hover:text-lime-300">Вход</Link></>
            )

          }


        </nav>
      </div>
    </header>
  );
}

export default NavBarComp;