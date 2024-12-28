


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Type from './components/type'; 
import  Teacherregister from "./components/teacherregister"
import Loginform from './components/loginform';
import Home from './components/home';
import Contact from './components/contact';
import Dashboard from './components/Dashboard';
import Coursecreate from "./components/coursecreate";
import SettingPage from './components/settingpage';
import Student from './components/student';
import StudentList from './components/StudentList';
import Enrollcourse from './components/enrollcourse';
import Studentregister from './components/studentregister';
// import Login1 from './components/login1';
import Home1 from './components/home1';
import Note  from "./components/note";
import NoteForm from './components/noteform';



const App = () => {
  return (
    <Router>
    <Routes>
      <Route path='/type' element={<Type/>}/>
       <Route path="/teacherregister" element={<Teacherregister />} />
       <Route path="/studentregister" element={<Studentregister />} />
       <Route path="/loginform" element={<Loginform />} />
       <Route path="/" element={<Home />} />
       <Route path='/contact'  element={<Contact/>}/>
       <Route path='/dashboard'  element={<Dashboard/>}/>
       <Route path='/coursecreate'  element={<Coursecreate/>}/>
       <Route path="/courses" element={<Coursecreate />} />
       <Route path="/settingpage" element={<SettingPage />} />
       <Route path="/student" element={<Student/>} />
       <Route path="/studentList" element={<StudentList/>} />
       <Route path="/enrollcourse" element={<Enrollcourse/>} />
       <Route path="/home" element={<Home1 />} />
       <Route path="/note" element={<Note/>}/>
       <Route path="/noteform"  element={<NoteForm/>}/>


       {/* <Route path="/login1" element={<Login1/>} /> */}





       





       
      </Routes>
    </Router>
  );
};

export default App;
