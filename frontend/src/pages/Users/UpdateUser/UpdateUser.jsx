import "./UpdateUser.scss";
import { useParams } from "react-router-dom";
import { users } from "../../../../datas/data";
import FormUser from "../FormUser/FormUser";

export default function UpdateUser() {
  const { id } = useParams();
  const user = users.find((user) => user.id === parseInt(id));

  return (
    <div className="UpdateUser-page full-page flex-center flex-col">
      <h1 className="text-3xl font-bold text-red-300">Update User</h1>
      <FormUser user={user} />
    </div>
  );
}
