import { useState } from "react";
import "./Login.css";
const Login = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  return (
    < div className="Form_outside">
       
      <div className=""><span><b>Login From</b></span></div>
      <div >
        <form>
          <label htmlFor="email">
            <strong>Email :</strong>
          </label>
          <input
            id="email"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            type="email"
            placeholder="Enter email "
          />
          <label htmlFor="password">
            <strong>Password :</strong>
          </label>
          <input
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            id="password"
            type="password"
            placeholder="Enter password "
          />
          <button
            className="button22"
            onClick={() => {
              console.log(email, password);
            }}>
            Login
          </button>
        </form>
      </div>
      
    </div>
  );
};
export default Login;
