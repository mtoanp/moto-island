import "./NavBar.scss";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function NavBar() {
  const { currentUser, isAdmin, authLogOut } = useAuth(); //

  const handleLogout = () => {
    console.log("Logout");
    authLogOut();
  };

  return (
    <nav className="navBar justify-center gap-[4vw] flex items-center w-[100%]">
      {/* LEFT PART */}
      <div className="nav-left">
        <NavLink to="/" className="logo">
          <div className="bg-gray-500 text-black px-2 py-2 rounded-full hover:text-white">
            Home
          </div>
        </NavLink>
      </div>

      {/* MIDDLE PART */}
      <div className="nav-middle ">
        <div className="nav-links text-black flex gap-[4vw]  px-2 py-2 rounded-full">
          {!currentUser && (
            <>
              <NavLink to="/register">
                <div className="hover:text-gray-500">Register</div>
              </NavLink>
              <NavLink to="/login">
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
                <div className="hover:text-gray-500">History</div>
              </NavLink>
            </>
          )}
          {currentUser && currentUser === "admin" && (
            <>
              <NavLink to="/api/users">
                <div className="hover:text-gray-500">Users</div>
              </NavLink>
              <NavLink to="/api/orders">
                <div className="hover:text-gray-500">Orders</div>
              </NavLink>
            </>
          )}
        </div>
      </div>

      {/* RIGHT PART */}
      <div className="nav-right">
        {currentUser && (
          <button
            onClick={handleLogout}
            className="bg-black text-white px-2 py-2 rounded-full">
            <div className="hover:text-gray-500">Log Out</div>
          </button>
        )}
      </div>
    </nav>
  );
}
