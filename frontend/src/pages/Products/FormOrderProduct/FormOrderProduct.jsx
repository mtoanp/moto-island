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
		<div className="FormOrderProduct flex flex-row paper">
			<div action="order-product-form">
				<input type="text" name="name" id="name" placeholder="Name" />
				<input
					type="number"
					name="quantity"
					id="quantity"
					placeholder="Quantity"
				/>
				<input type="number" name="price" id="price" placeholder="Price" />
			</div>

			<div className="btn btn-success" onClick={handleAddProduct}>
				+
			</div>
		</div>
	);
}
