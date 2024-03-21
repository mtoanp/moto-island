import "./FormUser.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FormUser({ user }) {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // useEffect(() => {
  //   if (user) {
  //     setUserData(user);
  //   }
  // }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
    console.log(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    navigate("/api/users");
  };

  return (
    <div className="FormUser">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-5 p-5 border rounded-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={userData ? userData.name : ""}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={userData ? userData.email : ""}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Add User
        </button>
      </form>
    </div>
  );
}
