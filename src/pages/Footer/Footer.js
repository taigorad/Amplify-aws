import "./footer.css";
import insta from "../../assests/insta.png";
import face from "../../assests/facebook.png";
import google from "../../assests/google.png";
function Footer() {
  return (
    <div>
        
      <div className="footer_div">
        <div className="footer_image">
          <img src={insta} />
          <img src={face} />
          <img src={google} />
        </div>
      </div>
    </div>
  );
}
export default Footer;
