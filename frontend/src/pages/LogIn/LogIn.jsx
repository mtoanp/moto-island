import "./LogIn.scss";
import { useAuth } from "../../contexts/AuthContext";

export default function LogIn() {
  const { authLogIn } = useAuth();

  return (
    <div className="login-page full-page flex-center flex-col">
      <div className="auth-container paper">
        (Testing) LogIn as:
        <button
          className="btn btn-primary ml-4"
          onClick={() => authLogIn("user")}>
          User
        </button>
        <button
          className="btn btn-primary ml-4"
          onClick={() => authLogIn("admin")}>
          Admin
        </button>
      </div>

      <div className="login-form paper mt-4">
        <h1 className="text-xl text-red-300">Login</h1>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
