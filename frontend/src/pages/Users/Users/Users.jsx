import "./Users.scss";
import { users } from "../../../../datas/data";

export default function Users() {
  return (
    <div className="users-page full-page flex-center flex-col">
      <div className="header flex flex-row justify-between">
        <h1 className="text-3xl font-bold text-red-300">Users list</h1>
        <div className="btn btn-success ml-4"> + </div>
      </div>

      <div className="users mt-5">
        {users.map((user) => (
          <div key={user.id} className="user flex flex-row mt-1">
            <p className="text-xl font-bold">{user.name}</p>
            <p className="text-lg ml-2">{user.email}</p>
            <div className="control">
              <div className="btn btn-warning ml-2">Edit</div>
              <div className="btn btn-danger ml-2">Delete</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
