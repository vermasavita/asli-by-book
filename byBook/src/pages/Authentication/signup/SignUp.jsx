import { Navbar } from "../../../components/nav/Navbar";
import "./signup.css";

const Signup = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="box">
        <div className="login-container">
          <h1>Sign Up</h1>
          <div className="login-credential">
            <div className="login-email">
              <label for="">Email address *</label>
              <input type="email" name="" id="" />
            </div>

            <div className="login-password">
              <label for="">Password *</label>
              <input type="password" name="" id="" />
            </div>

            <div className="confirm-password">
              <label for="">Confirm Password *</label>
              <input type="password" name="" id="" />
            </div>
          </div>

          <div className="con">
            <div className="remember-me">
              <input type="checkbox" id="remember-box" />
              <label id="remember-box" for="">
                I accept all the Terms & Conditions
              </label>
            </div>
          </div>

          <div className="login-btns">
            <a href="#" className="login">
              Sign Up
            </a>
            <a href="#" className="new-account">
              Already have an account<strong></strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Signup };
