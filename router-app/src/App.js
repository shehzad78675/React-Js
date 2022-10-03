import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Navbar from './Components/Navbar';
import Error from './Components/Pages/Error';
import Post from './Components/Pages/Post';
import PostCategory from './Components/Pages/PostCategory';
import Login from './Components/Pages/Login';
import Dashboard from './Components/Pages/Dashboard';
import Logout from './Components/Pages/Logout';

function App() {
  let isLogged = true;
  let data = {
    "st": "User not login"
  }
  return (
     <>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/post' element={<Post/>}/>
            <Route path='/post/:category' element={<PostCategory/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/logout' element={<Logout/>}/>
            <Route path='/dashboard' element={isLogged ? <Dashboard/> : <Navigate to="/login" replace state={data}/>}/>
            <Route path='*' element={<Error/>}/>
          </Routes>
        </BrowserRouter>
     </>
  );
}

export default App;
