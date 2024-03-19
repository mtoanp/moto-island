import "./NavBar.scss";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
	const [currentUser, setCurrentUser] = useState("user"); // [1

	const handleLogout = () => {
		console.log("Logout");
		setCurrentUser(null);
	};

	return (
		<nav className="navBar">
			<div className="nav-left">
				<NavLink to="/" className="logo">
					Logo
				</NavLink>
			</div>
			<div className="nav-middle"></div>
			<div className="nav-right">
				<div className="nav-links text-green-800">
					{!currentUser && (
						<>
							<NavLink to="/register">Register</NavLink>
							<NavLink to="/login">Login</NavLink>
						</>
					)}

					{currentUser && currentUser === "user" && (
						<>
							<NavLink to="/api/orders/new">New Order</NavLink>
							<NavLink to="/api/orders/history">History</NavLink>
							<a onClick={handleLogout} className="text-red-300 cursor-pointer">
								Logout
							</a>
						</>
					)}

					{currentUser && currentUser === "admin" && (
						<>
							<NavLink to="/api/users">Users</NavLink>
							<NavLink to="/api/orders">Orders</NavLink>
							<a onClick={handleLogout} className="text-red-300 cursor-pointer">
								Logout
							</a>
						</>
					)}
				</div>
			</div>
		</nav>
	);
}
