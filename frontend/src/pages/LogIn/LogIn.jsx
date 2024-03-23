import "./LogIn.scss";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

import purpleSky from "../../assets/purpleSky.jpg";
export default function LogIn() {
	const { authLogIn } = useAuth();

	return (
		<section className="main">
			<img src={purpleSky} alt="..." className="login-bg" />
			<div className="login-page">
				<div className="auth-container text-center ">
					<button
						className="btn btn-primary "
						onClick={() => authLogIn("user")}
					>
						<Link to="/">Us</Link>
					</button>
					<button
						className="btn btn-primary ml-4"
						onClick={() => authLogIn("admin")}
					>
						<Link to="/">Ad</Link>
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
