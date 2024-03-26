import "./Register.scss";
import { Link } from "react-router-dom";
import purpleSky from "../../assets/purpleSky.jpg";

export default function Register() {
	return (
		<section className="big-cover">
			<img src={purpleSky} alt="..." className="login-bg" />
			<div className="login-page">
				<div className="login-form">
					<h1 className="login-title">Register</h1>
					<div className="input-box">
						<input
							type="text"
							id="username"
							required="required"
							autoComplete="off"
						/>
						<label htmlFor="">Email</label>
						<i className="bx bxs-user"></i>
					</div>
					<div className="input-box">
						<input type="password" id="password" required="required" />
						<label htmlFor="">Password</label>
						<i className="bx bxs-lock-alt"></i>
					</div>
					<div className="input-box">
						<input type="password" id="password" required="required" />
						<label htmlFor="">Confirm Password</label>
						<i className="bx bxs-lock-alt"></i>
					</div>
					<button type="submit" className="login-button">
						<Link to="/error">Create</Link>
					</button>
				</div>
			</div>
		</section>
	);
}
