import {Link } from "react-router-dom"
import { useContext } from "react"
import {context} from "../App.js"
import "./navbar.css"
import abc from "../assests/l.jpg"
import {ShoppingCart} from "phosphor-react"
function Navbar(){
    const number=useContext(context)
    console.log(number)
    return (<div className="navbar">

     {/* <div className="homelink"><Link to="/">Home</Link></div> */}
     <h1 className="span_heading">BR<span className="span_name">@</span>ND</h1>
     {/* <img className="image123" src={abc}/> */}

        <div className="links"> <Link to="/">Home</Link>  <Link to="/about_us">About us</Link> <Link to="/shop" >Shop</Link>
   <Link to="/login">Login</Link> <Link to="/cart"><ShoppingCart size={25}/><sup>{number.number}</sup></Link>
    </div></div>)
} 

export default Navbar