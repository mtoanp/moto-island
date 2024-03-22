import "./Products.scss";

export default function Products({ products, removeProductFromOrder }) {
  return (
    <div className="order-items">
      {products &&
        products.length > 0 &&
        products.map((item, index) => (
          <div key={index} className="item paper flex flex-row justify-between">
            <p>{item.name}</p>
            <p>{item.quantity}</p>
            <p>{item.price}</p>
            {removeProductFromOrder && (
              <div className="control">
                <div
                  className="btn btn-danger ml-2"
                  onClick={() => removeProductFromOrder(index)}>
                  Delete
                </div>
              </div>
            )}
          </div>
        ))}
    </div>
  );
}
