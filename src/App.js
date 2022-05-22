import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Footer from './Pages/Shared/Footer/Footer';
import Purchase from './Pages/Purchase/Purchase';
import About from './Pages/About/About';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Products from './Pages/Home/Products/Products';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/purchase" element={<Purchase/>}></Route>
        <Route path="dashboard" element={<Dashboard/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
