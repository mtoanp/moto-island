import "./Register.scss";
import { Link } from "react-router-dom";
import purpleSky from "../../assets/purpleSky.jpg";

export default function Register() {
	return (
		<section className="main">
			<img src={purpleSky} alt="..." className="login-bg" />
			<div className="login-page">
				<div className="login-form">
					<h1 className="login">Register</h1>
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
						<div className="input-box">
							<input
								type="password"
								placeholder="Confirm Password"
								id="confirm-password"
								name="confirm-password"
								required
							/>
							<i className="bx bxs-lock-alt"></i>
						</div>
						<button type="submit" className="login-button">
							<Link to="/error">Create</Link>
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}
