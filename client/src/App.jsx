import NavBarComp from "./components/Navbar/NavBar"
import Home from "./components/Home/Home"
import './index.css';
import Login from "./components/Login/Login";
import CatalogPage from "./components/Catalog/Catalog";
import QuestionForm from "./components/QuestionForm/QuestionForm"
import Register from "./components/Register/Register";
import FormComponent from "./components/QuestionForm/FormComponent.jsx";
import ProfileCard from "./components/Profile/Profile";
import AddStudent from "./components/AddStudent/AddStudent";


import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/authContext.jsx";
import QuizTable from "./components/QuestionForm/QuizForm.jsx";
import StudentsTest from "./components/QuestionForm/StudentsTest.jsx";

function App() {
  

  return (

    <AuthContextProvider >
   <div className="bg-white">
    <NavBarComp/>
     <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/catalog' element={<CatalogPage/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='/formCopmonent' element={<FormComponent/>} />
    <Route path='/questionForm' element={<QuestionForm/>} />
    <Route path='/profile' element={<ProfileCard/>} />
    <Route path='/addStudent' element={<AddStudent/>} />
    <Route path='/quizForm' element={<QuizTable/>} />
    <Route path='/studentTest/:testId' element={<StudentsTest/>} />
    </Routes>
   </div>
   </AuthContextProvider>
  )
}

export default App
