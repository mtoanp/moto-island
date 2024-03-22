import "./NewOrder.scss";
import FormOrder from "../FormOrder/FormOrder";

export default function NewOrder() {
  return (
    <div className="NewOrder full-page flex-center flex-col">
      <h1 className="text-3xl font-bold text-red-300">New Order</h1>
      <FormOrder />
    </div>
  );
}
