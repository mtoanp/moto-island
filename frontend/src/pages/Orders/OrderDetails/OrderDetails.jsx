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
    <div className="OrderDetails-page">
      <div className="order-container">
        {/* HEAD */}
        <div className="head">
          <div className="row1 flex flex-row">
            <div className="left">
              <div className="magazin-info rounded">MOTO ISLAND</div>

              <div className="facture-number rounded mt-2 bg-gray-400">
                Facture nUmero: 123456
              </div>
            </div>

            <div className="right ml-4">
              <div className="row1 flex justify-between">
                <div className="logo">Logo</div>
                <div className="date rounded">
                  <p>date 01/01/2024</p>
                  <p>date 01/01/2024</p>
                </div>
              </div>

              <div className="client flex justify-center mt-4">
                <div className="rounded w-1/2">Client</div>
              </div>
            </div>
          </div>
          <div className="row2 mt-2">
            <div className="moto-info rounded">
              <p>Imma: 123456</p>
              <p>Km: 123456</p>
            </div>
          </div>
        </div>

        {/* BODY */}
        <div className="body flex flex-col">
          <div className="products-container flex-1 border">
            <div className="title"></div>
            <div className="products"></div>
          </div>

          <div className="products-sub flex">
            <div className="left border">...</div>
            <div className="total flex flex-col flex-1 border">
              <div className="border">Total</div>
              <div className="border">Total</div>
              <div className="border">Total</div>
            </div>
            <div className="date rounded ml-4 mt-4 bg-gray-400">
              {" "}
              Date de Paiement : 01/01/2024
            </div>
          </div>
        </div>

        {/* FOOT */}
        <div className="foot mt-4"></div>
      </div>

      {/* <h1 className="text-3xl font-bold text-red-300">OrderDetails</h1>
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
      </div> */}
    </div>
  );
}
