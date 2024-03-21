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
		<nav className="navBar justify-between flex items-center w-[100%] ">
			<div className="nav-left p-8">
				<NavLink to="/" className="logo">
					<div className="hover:text-gray-500">Logo</div>
				</NavLink>
			</div>
			{/* <div className="nav-middle"></div> */}
			<div className="nav-right p-9">
				<div className="nav-links text-black  flex gap-[4vw]">
					{!currentUser && (
						<>
							<NavLink to="/register hover:text-gray-500">
								{" "}
								<div className="hover:text-gray-500">Register</div>
							</NavLink>
							<NavLink to="/login" hover:text-gray-500>
								<div className="hover:text-gray-500">Login</div>
							</NavLink>
						</>
					)}

					{currentUser && currentUser === "user" && (
						<>
							<NavLink to="/api/orders/new">
								<div className="hover:text-gray-500">New Order</div>
							</NavLink>
							<NavLink to="/api/orders/history">
								{" "}
								<div className="hover:text-gray-500">History</div>
							</NavLink>
							<a onClick={handleLogout} className="text-red-300 cursor-pointer">
								<div className="hover:text-gray-500">Log Out</div>
							</a>
						</>
					)}

					{currentUser && currentUser === "admin" && (
						<>
							<NavLink to="/api/users">
								{" "}
								<div className="hover:text-gray-500">Users</div>
							</NavLink>
							<NavLink to="/api/orders">
								{" "}
								<div className="hover:text-gray-500">Orders</div>
							</NavLink>
							<a onClick={handleLogout} className="text-red-300 cursor-pointer">
								<div className="hover:text-gray-500">Log Out</div>
							</a>
						</>
					)}
				</div>
			</div>
		</nav>
	);
}
