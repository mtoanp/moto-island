import "./UserDetails.scss";
import { useParams, useNavigate } from "react-router-dom";
import { users } from "../../../../datas/data";

export default function UserDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const user = users.find((user) => user.id === parseInt(id));

  const goBack = () => {
    navigate("/api/users");
  };

  return (
    <div className="UserDetails-page full-page flex-center flex-col">
      <h1 className="text-3xl font-bold text-red-300">UserDetails</h1>
      <p>{user.name}</p>
      <p>{user.email}</p>

      <div className="goBack btn btn-secondary" onClick={goBack}>
        Go Back
      </div>
    </div>
  );
}
