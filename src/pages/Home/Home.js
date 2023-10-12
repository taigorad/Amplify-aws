import Footer from "../Footer/Footer.js"
import { Link } from "react-router-dom";
import photo from "../../assests/photo8.png";
import photo1 from "../../assests/photo4.png";
import photo2 from "../../assests/photo7.png";
import "./home.css";

import abc from "../../assests/walpaper.png";
const Home = () => {
  return (
    <>
    <div className="home_div1">
      <div className="home_div">
        <div>
          <h1 className="home_heading">Making Shopping Better for Everyone </h1>

          <p className="home_paragraph">
            Brand is supporting the next <br />
            generation of entrepreneurs, the world’s
            <br />
            biggest brands, and everyone in between...
          </p>
          <div className="link123">
            <Link to="/login">Get Start </Link>
          </div>
        </div>
        <div>
          <img
            className="home_img_div"
            src={abc}
            alt="electronic device images"
          />
        </div>
      </div>

      <div className="Home_offers">
       <div> <h1 className="Home_offer_heding">Best of Electronics</h1></div>
        
          
          
     
      </div>
    </div>
    <Footer/>
    </>
  );
};
export default Home;
