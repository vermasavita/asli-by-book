import { Navbar } from "../../../components/nav/Navbar";

const Signup = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="box">
        <div className="login-container">
          <h1>Sign Up</h1>
          <div className="login-credential">
            <div className="login-email">
              <label htmlFor="">Email address *</label>
              <input type="email" name="" id="" />
            </div>

            <div className="login-password">
              <label htmlFor="password">Password *</label>
              <input type="password" name="" id="password" />
            </div>

            <div className="confirm-password">
              <label htmlFor="confPwd">Confirm Password *</label>
              <input type="password" name="" id="confPwd" />
            </div>
          </div>

          <div className="con">
            <div className="remember-me">
              <input type="checkbox" id="remember-box" />
              <label htmlFor="remember-box">
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
