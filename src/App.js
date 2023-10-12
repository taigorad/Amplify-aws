import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {createContext ,useState} from "react"
import Navbar  from "./components/Navbar.js"

import Shop from "./pages/Shop/Shop.js"
import Cart from "./pages/Cart/Card.js"
import Home from "./pages/Home/Home.js"
import Login from "./pages/Login/Login.js"
import About from "./pages/About/About.js"
//import Footer from "./components/Footrer/Footer.js"

import './App.css';

export const context=createContext()
function App() {
  const [number,setNumber]=useState(0)
  const contextvalue={
    number:number,
    setnumber:setNumber

  }
  return (
    <context.Provider value={contextvalue}>
    <Router>
    <Navbar/>
      <Routes>
       <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/about_us" element={<About/>}/>
      </Routes>
    </Router>
  
    </context.Provider>
    
  );
}

export default App;
