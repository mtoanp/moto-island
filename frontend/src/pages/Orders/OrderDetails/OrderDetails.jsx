import "./OrderDetails.scss";
import { useParams, useNavigate } from "react-router-dom";
import { ordersData } from "../../../../datas/data";
import Products from "../../Products/Products/Products";

export default function OrderDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const order = ordersData.find((order) => order.id === parseInt(id));

  const goBack = () => {
    navigate("/api/orders");
  };

  const handleEdit = () => {
    navigate(`/api/orders/${order.id}/edit`);
  };

  const handlePrint = () => {
    console.log("Print");
  };

  return (
    <div className="OrderDetails-page full-page flex-center flex-col">
      <h1 className="text-3xl font-bold text-red-300">OrderDetails</h1>
      {order && (
        <div className="order-container">
          <p>Client: {order.client}</p>

          <div className="products">
            <h2>Products</h2>
            <Products products={order.products} />
          </div>

          <p>Total: {order.total || 0}</p>

          <div className="control">
            <div className="btn btn-warning ml-2" onClick={handleEdit}>
              Edit
            </div>
          </div>

          <div className="print btn btn-success mt-4" onClick={handlePrint}>
            Print
          </div>
        </div>
      )}

      <div className="goBack btn btn-secondary mt-2" onClick={goBack}>
        Go Back
      </div>
    </div>
  );
}
