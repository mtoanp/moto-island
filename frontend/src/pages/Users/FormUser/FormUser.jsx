import "./FormUser.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usersData } from "../../../../datas/data";

export default function FormUser({ user }) {
  const navigate = useNavigate();

  // Ensure userData is initialized with an object
  const [userData, setUserData] = useState({
    id: user?.id || "",
    username: user?.username || "",
    password: user?.password || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted: ", userData);

    // Demo with Local Data: usersData
    if (user) {
      usersData[user.id - 1] = userData;
    } else {
      let userTarget = userData;
      userTarget.id = usersData.length + 1;
      usersData.push(userTarget);
    }
    navigate("/api/users");
  };

  return (
    <div className="FormUser">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-5 p-5 border rounded-lg">
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 font-bold mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username" // Add this line
            value={userData?.username || ""}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Username"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password" // Add this line
            value={userData?.password || ""}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Password"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          {user ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
}
