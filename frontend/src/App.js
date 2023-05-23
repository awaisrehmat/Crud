// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';
import Posts from './components/Posts';
import Update from './components/Update';
import Login from './components/Login';
import ContactForm from './components/ContactUs/ContactUs';

function App() {
  return (
    <>
      <Navbar />
      <ContactForm />
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/all-posts' element={<Posts />} />
      <Route path='/update' element={<Create/>} />
      <Route path='/:id' element={<Update />} />
      <Route path='/login' element={<Login />} />

      </Routes>
      
    </>
  );
}

export default App;
