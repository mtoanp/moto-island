import "./EditOrder.scss";
import { useParams } from "react-router-dom";
import { ordersData } from "../../../../datas/data";
import FormOrder from "../FormOrder/FormOrder";

export default function EditOrder() {
  const { id } = useParams();
  const order = ordersData.find((order) => order.id === parseInt(id));

  return (
    <div className="EditOrder-page full-page flex-center flex-col">
      <h1 className="text-3xl font-bold text-red-300">EditOrder</h1>
      <FormOrder order={order} />
    </div>
  );
}
