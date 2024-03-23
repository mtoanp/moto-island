import "./LogIn.scss";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

import purpleSky from "../../assets/purpleSky.jpg";
export default function LogIn() {
  const { authLogIn } = useAuth();
  const navigate = useNavigate();

  const LogInAs = (acc) => {
    authLogIn(acc);
    navigate("/");
  };

  return (
    <section className="main">
      <img src={purpleSky} alt="..." className="login-bg" />
      <div className="login-page">
        <div className="auth-container text-center">
          <button className="btn btn-primary " onClick={() => LogInAs("user")}>
            US
          </button>
          <button
            className="btn btn-primary ml-4"
            onClick={() => LogInAs("admin")}>
            AD
          </button>
        </div>
        <div className="login-form">
          <h1 className="login">Login</h1>
          <form>
            <div className="input-box">
              <input
                type="text"
                placeholder="Username"
                id="username"
                name="username"
                required
              />
              <i className="bx bxs-user"></i>
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                required
              />
              <i className="bx bxs-lock-alt"></i>
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
