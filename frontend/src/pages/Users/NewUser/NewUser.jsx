import "./NewUser.scss";
import FormUser from "../FormUser/FormUser";

export default function NewUser() {
  return (
    <div className="NewUser full-page flex-center flex-col">
      <h1 className="text-3xl font-bold text-red-300">New User</h1>
      <FormUser />
    </div>
  );
}
