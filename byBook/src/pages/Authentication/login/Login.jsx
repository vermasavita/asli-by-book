import './login.css'
import { Navbar } from "../../../components/nav/Navbar";

const Login = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="box">
        <div className = "login-container">
          <h1>Login</h1>
          <div className = "login-credential">
            <div className = "login-email">
              <label for="">Email address *</label>
              <input type="email" name="" id="" />
            </div>

            <div className = "login-password">
              <label for="">Password *</label>
              <input type="password" name="" id="" />
              Wrong password. Try again.
            </div>
          </div>

          <div className = "con">
            <div className = "remember-me">
              <input type="checkbox" id="remember-box" />
              <label id="remember-box" for="">
                Remember me
              </label>
            </div>

            <a href="#">Forgot your password?</a>
          </div>

          <div className = "login-btns">
            <a href="#" className = "login">
              Login
            </a>
            <a href="/account/sign up/signup.html" className = "new-account">
              Create New Account <strong></strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Login };
