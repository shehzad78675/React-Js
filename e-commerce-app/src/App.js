import './App.css';
import Cart from './pages/Cart';
import CategoryPage from './pages/CategoryPage';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import Login from './pages/Login';
import Register from './pages/Register';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Announce from './components/Announce';
import WishList from './pages/WishList';

function App() {
  return (
    <Router>
      <Announce/>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
          <Route path='/categories' element={<CategoryPage/>}/>
          <Route path="/categories/:id" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
    </Routes>
    <Newsletter/>
    <Footer/>
  </Router>
  );
}

export default App;
