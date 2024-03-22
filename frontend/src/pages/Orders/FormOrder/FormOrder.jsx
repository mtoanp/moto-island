import "./FormOrder.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ordersData } from "../../../../datas/data";

export default function FormOrder({ order }) {
  const navigate = useNavigate();

  // Ensure orderData is initialized with an object
  const [orderData, setOrderData] = useState({
    id: order?.id || "",
    client: order?.client || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted: ", orderData);

    // Demo with Local Data: ordersData
    if (order) {
      ordersData[order.id - 1] = orderData;
      navigate(`/api/orders/${order.id}`);
    } else {
      let orderTarget = orderData;
      orderTarget.id = ordersData.length + 1;
      ordersData.push(orderTarget);
      navigate(`/api/orders/${orderData.id}`);
    }
  };

  return (
    <div className="FormOrder">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-5 p-5 border rounded-lg">
        <div className="mb-4">
          <label
            htmlFor="ordername"
            className="block text-gray-700 font-bold mb-2">
            Client
          </label>
          <input
            type="text"
            id="client"
            name="client" // Add this line
            value={orderData?.client || ""}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Client"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          {order ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
}
