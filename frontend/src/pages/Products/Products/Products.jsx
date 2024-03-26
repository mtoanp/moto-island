import "./Products.scss";

export default function Products({ products, removeProductFromOrder }) {
	return (
		<div className="third-stage text-white">
			{products &&
				products.length > 0 &&
				products.map((item, index) => (
					<div key={index} className="item  flex flex-col justify-between">
						<p>{item.name}</p>
						<p>{item.quantity}</p>
						<p>{item.price}</p>
						{removeProductFromOrder && (
							<div className="control">
								<div
									className="btn btn-danger ml-2"
									onClick={() => removeProductFromOrder(index)}
								>
									Delete
								</div>
							</div>
						)}
					</div>
				))}
		</div>
	);
}
