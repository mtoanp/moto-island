import "./OrderDetails.scss";
import { useParams, useNavigate } from "react-router-dom";
import { ordersData } from "../../../../datas/data";

export default function OrderDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const order = ordersData.find((order) => order.id === parseInt(id));

  const goBack = () => {
    navigate("/api/orders");
  };

  const handlePrint = () => {
    console.log("Print");
  };

  return (
    <div className="OrderDetails-page full-page flex-center flex-col">
      <h1 className="text-3xl font-bold text-red-300">OrderDetails</h1>
      {/* <p>{order.id}</p> */}
      <p>{order.client}</p>

      <div className="print btn btn-success" onClick={handlePrint}>
        Print
      </div>

      <div className="goBack btn btn-secondary" onClick={goBack}>
        Go Back
      </div>
    </div>
  );
}
