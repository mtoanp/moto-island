import "./NavBar.scss";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiFullMotorcycleHelmet } from "react-icons/gi";
import { FaThList } from "react-icons/fa";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { RiLogoutCircleLine } from "react-icons/ri";

function NavBar() {
	const [currentUser, setCurrentUser] = useState("user"); // [1

	const handleLogout = () => {
		console.log("Logout");
		setCurrentUser(null);
	};

	return (
		<nav className="navBar flex justify-between items-center w-[92%] bg-red-200">
			<div className="nav-left">
				<NavLink to="/" className="logo">
					<NavBarIcons icon={<GiFullMotorcycleHelmet size="30" />} />
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
							<div className="flex items-center gap-[4vw]">
								<NavLink
									to="/api/orders/new"
									className="left-[1440px] top-[10px] absolute text-black "
								>
									<NavBarIcons icon={<FaFileInvoiceDollar size="30" />} />
								</NavLink>
								<NavLink
									to="/api/orders/history"
									className="left-[1500px] top-[10px] text-black absolute"
								>
									<NavBarIcons icon={<FaThList size="30" />} />
								</NavLink>
								<a
									onClick={handleLogout}
									className="left-[1560px] top-[10px] text-black absolute"
								>
									<NavBarIcons icon={<RiLogoutCircleLine size="30" />} />
								</a>
							</div>
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
// eslint-disable-next-line react/prop-types
const NavBarIcons = ({ icon }) => <div className="navbar-icon">{icon}</div>;

export default NavBar;
