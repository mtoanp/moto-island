import "./FormOrderProduct.scss";

export default function FormOrderProduct({ addProductToOrder }) {
	const handleAddProduct = () => {
		const name = document.getElementById("name").value;
		const quantity = document.getElementById("quantity").value;
		const price = document.getElementById("price").value;
		const product = { name, quantity, price };
		addProductToOrder(product);
	};

	return (
		<div className="FormOrderProduct">
			<div action="order-product-form">
				<div className="input-box-template">
					<input
						className="input-typo"
						type="text"
						name="name"
						id="name"
						required
					/>
					<label htmlFor="" className="label-typo">
						Product Name
					</label>
				</div>
				<div className="input-box-template">
					<input
						className="input-typo"
						type="number"
						name="quantity"
						id="quantity"
						required
					/>
					<label htmlFor="" className="label-typo">
						Quantity
					</label>
				</div>
				<div className="input-box-template">
					<input
						className="input-typo"
						type="number"
						name="price"
						id="price"
						required
					/>
					<label htmlFor="" className="label-typo">
						Price
					</label>
				</div>
			</div>
			<div className="btn btn-success " onClick={handleAddProduct}>
				+
			</div>
		</div>
	);
}
