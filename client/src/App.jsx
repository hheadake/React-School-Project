import NavBarComp from "./components/Navbar/NavBar"
import Home from "./components/Home/Home"
import './index.css';
import Login from "./components/Login/Login";
import CatalogPage from "./components/Catalog/Catalog";

import Register from "./components/Register/Register";
import FormComponent from "./components/QuestionForm/FormComponent.jsx";
import ProfileCard from "./components/Profile/Profile";
import AddStudent from "./components/AddStudent/AddStudent";


import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/authContext.jsx";
import QuizTable from "./components/QuestionForm/QuizForm.jsx";
import StudentsTest from "./components/QuestionForm/StudentsTest.jsx";
import FormProfile from "./components/Profile/FormProfile.jsx";

import Details from "./components/Catalog/Details.jsx";
import Edit from "./components/Catalog/Edit.jsx";
import PrivateGuard from "./components/guard/PrivateGuard.jsx";
import Logout from "./components/Logout/Logout.jsx";

function App() {
  

  return (

    <AuthContextProvider >
   <div className="bg-white">
    <NavBarComp/>
     <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/catalog' element={<CatalogPage/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/logout' element={<Logout/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='/studentDetails/:studentId' element={<Details/>} />
    <Route element={<PrivateGuard/>}>
    <Route path='/editStudent/:studentId' element={<Edit/>} />
    <Route path='/addStudent' element={<AddStudent/>} />
    <Route path='/formProfile' element={<FormProfile/>} />
    <Route path='/profile/:profileId' element={<ProfileCard/>} />
    <Route path='/editProfile' element={<FormProfile/>} />
    <Route path='/studentTest/:testId' element={<StudentsTest/>} />
    <Route path='/formCopmonent' element={<FormComponent/>} />
    <Route path='/quizForm' element={<QuizTable/>} />
    </Route>
    </Routes>
   </div>
   </AuthContextProvider>
  )
}

export default App
