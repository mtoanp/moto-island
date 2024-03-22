import "./FormOrder.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ordersData } from "../../../../datas/data";
import Products from "../../Products/Products/Products";
import FormOrderProduct from "../../Products/FormOrderProduct/FormOrderProduct";

export default function FormOrder({ order }) {
  const navigate = useNavigate();
  const [products, setProducts] = useState(order?.products || []);

  // Ensure orderData is initialized with an object
  const [orderData, setOrderData] = useState({
    id: order?.id || "",
    client: order?.client || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderData((prevData) => ({ ...prevData, [name]: value }));
  };

  const addProductToOrder = (product) => {
    product.id = products.length + 1;
    console.log("addProduct: ", product);
    setProducts((prevProducts) => [...prevProducts, product]);
    // setOrderData((prevData) => ({ ...prevData, products }));
  };

  const removeProductFromOrder = (index) => {
    console.log("removeProduct: ", index);
    setProducts((prevProducts) =>
      prevProducts.filter((product, i) => i !== index)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted: ", orderData);

    // Demo with Local Data: ordersData
    if (order) {
      // Update
      ordersData[order.id - 1] = orderData;
      navigate(`/api/orders/${order.id}`);
    } else {
      // Create
      let orderTarget = orderData;
      orderTarget.id = ordersData.length + 1;
      orderTarget.products = products;
      ordersData.push(orderTarget);
      navigate(`/api/orders/${orderData.id}`);
    }
  };

  // Calculate total price of products
  const totalPrice = products
    .reduce((acc, product) => acc + product.price * product.quantity, 0)
    .toFixed(2);

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

        <div className="products">
          <h2>Products</h2>
          <Products
            products={products}
            removeProductFromOrder={removeProductFromOrder}
          />
        </div>

        <div className="product-form mt-4">
          <FormOrderProduct addProductToOrder={addProductToOrder} />
        </div>

        <div className="total flex flex-row justify-between mt-4">
          <h2>Total</h2>
          <p>{totalPrice}</p>
        </div>

        <button
          type="submit"
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          {order ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
}
