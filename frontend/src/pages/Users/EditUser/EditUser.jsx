import "./EditUser.scss";
import { useParams } from "react-router-dom";
import { usersData } from "../../../../datas/data";
import FormUser from "../FormUser/FormUser";

export default function EditUser() {
  const { id } = useParams();
  const user = usersData.find((user) => user.id === parseInt(id));

  return (
    <div className="EditUser-page full-page flex-center flex-col">
      <h1 className="text-3xl font-bold text-red-300">Edit User</h1>
      <FormUser user={user} />
    </div>
  );
}
