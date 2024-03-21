import "./Users.scss";
import { users } from "../../../../datas/data";
import { useNavigate } from "react-router-dom";

export default function Users() {
  const navigate = useNavigate();

  const goToDetails = (id) => {
    navigate(`/api/users/${id}`);
  };
  const handleNew = () => {
    navigate("/api/users/new");
  };
  const handleEdit = (user) => {
    console.log("Edit user", user);
    navigate(`/api/users/${user.id}/edit`);
  };
  const handleDelete = (id) => {
    console.log("Delete user", id);
  };

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
            <div key={user.id} className="user flex flex-row mt-1">
              <p
                className="text-xl font-bold cursor-pointer"
                onClick={() => goToDetails(user.id)}>
                {user.name}
              </p>
              <p className="text-lg ml-2">{user.email}</p>
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
