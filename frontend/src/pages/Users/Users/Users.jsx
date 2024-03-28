import "./Users.scss";
import { usersData } from "../../../../datas/data";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import UserService from "../../../services/UserService";

export default function Users() {
  const navigate = useNavigate();
  const [users, setUsers] = useState();
  // const [users, setUsers] = useState(usersData);

  const goToDetails = (id) => {
    navigate(`/api/users/${id}`);
  };

  const handleNew = () => {
    navigate("/api/users/new");
  };

  const handleEdit = (user) => {
    navigate(`/api/users/${user.id}/edit`);
  };

  const handleDelete = (id) => {
    console.log("Delete user", id);

    // Demo with Local Data: usersData
    usersData.splice(
      usersData.findIndex((user) => user.id === id),
      1
    );
    setUsers([...usersData]);
  };

  useEffect(() => {
    UserService.fetchUsers().then((data) => {
      setUsers(data);
    });
    // const fetchUsers = async () => {
    //   try {
    //     const response = await fetch("http://localhost:3000/api/users");
    //     if (!response.ok) {
    //       throw new Error("Failed to fetch users");
    //     }
    //     const data = await response.json();
    //     setUsers(data);
    //   } catch (error) {
    //     console.error("Error fetching users:", error);
    //   }
    // };

    // fetchUsers();
  }, []);

  return (
    <div className="users-page full-page flex-center flex-col">
      <div className="header flex flex-row justify-between">
        <h1 className="text-3xl font-bold text-red-300">Users list</h1>
        <div className="btn btn-success ml-4" onClick={handleNew}>
          +
        </div>
      </div>

      <div className="users mt-5">
        {users &&
          users.map((user) => (
            <div
              key={user.uuid}
              className="user flex flex-row justify-between mt-1 paper">
              <p
                className="text-xl font-bold cursor-pointer flex-center"
                onClick={() => goToDetails(user.uuid)}>
                {`${user.uuid}. ${user.name}`}
              </p>
              <div className="control">
                <div
                  className="btn btn-warning ml-2"
                  onClick={() => handleEdit(user)}>
                  Edit
                </div>
                <div
                  className="btn btn-danger ml-2"
                  onClick={() => handleDelete(user.id)}>
                  Delete
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
